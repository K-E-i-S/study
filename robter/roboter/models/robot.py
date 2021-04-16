from roboter.views import console
from roboter.models import ranking

DEFAULT_ROBOT_NAME = 'Roboter'


class Robot(object):
    """Base model for robot."""

    def __init__(self, name=DEFAULT_ROBOT_NAME, user_name=''):
        self.name = name
        self.user_name = user_name

    def hello(self):
        """Resturns words to the user that the robot speaks at the beginning"""
        #hello.txtを表示しinputで入力待ちをする
        #substituteはテンプレート置換を行えるメソッド
        while True:
            template = console.get_template('hello.txt')
            user_name = input(template.substitute({
                'robot_name': self.name}))

            #titleは頭を大文字それから後ろを小文字にする
            if user_name:
                self.user_name = user_name.title()
                break




class RestauruantRobot(Robot):
    """Handle data model om restaurant."""
    def __init__(self, name=DEFAULT_ROBOT_NAME):
        super().__init__(name=name)
        self.ranking_model = ranking.RankingModel()

    def _hello_decorator(func):
        # hello_decorator(func)のfuncに指定のdecoratorされた関数が入る: recommend_restauratなど
        # return warapper をまず返す(関数内関数)。実行はしていない。wrapperに実行とすると処理が走る
        # 次にwarpper関数の引数にselfが格納し、
        # selfで、Robotクラスuser_nameとhello()を呼ぶ。
        # retrunでfunc(self）を返す。：recommend_restaurant(RestrantRobot)
        def warpper(self):
            if not self.user_name:
                self.hello()
            return  func(self)
        return warpper

    @_hello_decorator
    def recommend_restaurant(self):
        """Show restaurant recommended restaurant to the user"""
        #most_popularを取得
        new_recommend_restaurant = self.ranking_model.get_most_popular()
        if not new_recommend_restaurant:
            return None

        #　Noを返されたら次のmost_popularを取得する、
        # その際にcsv_fileから取得する時に聞いた名前は除外する必要があるため
        # 除外用に聞いた名前を保持する必要がある
        will_recommend_restaurants = [new_recommend_restaurant]

        # あくまでrecommend_restaurantは提案をするだけ
        # そのためyesであればこの関数を抜ける
        # noであればリストが尽きるまで聞く
        # 何が好きなの？という処理は別の関数とする。
        # ただRestaurantRobotクラスの中で処理をする。
        # 現実で考えれば他のRobotが聞くかどうか今の時点ではわからないため。
        # 他にいればまたコードが変わってくる

        while True:
            template =  console.get_template('greeting.txt')
            is_yes = input(template.substitute({
                'robot_name': self.name,
                'user_name': self.user_name,
                'restaurant': new_recommend_restaurant
            }))

            if is_yes.lower() == 'y' or is_yes.lower() == 'yes':
                break

            if is_yes.lower() == 'n' or is_yes.lower() == 'no':
                new_recommend_restaurant = self.ranking_model.get_most_popular(
                    not_list=will_recommend_restaurants)
                if not new_recommend_restaurant:
                    break

            will_recommend_restaurants.append(new_recommend_restaurant)


    def ask_user_favorite(self):
        """collect favorite restaurant information from users"""
        while True:
            template = console.get_template(
                'which_restaurant.txt')
            restaurant = input(template.substitute({
                'robot_name': self.name,
                'user_name': self.user_name,
            }))
            if restaurant:
                self.ranking_model.increment(restaurant)
                break


    def thank_you(self):
        template = console.get_template('good_by.txt')
        print(template.substitute({
            'robot_name': self.name,
            'user_name': self.user_name,
        }))



