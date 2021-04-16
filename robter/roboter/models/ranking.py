
import csv
import os
import pathlib
import collections


RANKING_COLUMN_NAME = 'NAME'
RANKING_COLUMN_COUNT = 'COUNT'
RANKING_CSV_FILE_PATH = 'ranking.csv'


class CsvModel(object):
    """Base csv model."""
    def __init__(self, csv_file):
        self.csv_file = csv_file
    #os.path.exists(path):path が実在するパスかオープンしているファイル記述子を参照している場合 True を返します。
    # 壊れたシンボリックリンクについては False を返します。
        if not os.path.exists(csv_file):
            pathlib.Path(csv_file).touch()


class RankingModel(CsvModel):
    """Definition of class that generates ranking model to write to CSV"""
    #　self.dataをdefaultdict（辞書型で返す。この場合はintの0、よってself.dataは辞書型になる）で宣言し、
    # その後load_data()でcsv_fileを読み込みその情報をload.data()内でself.dataに入れている。
    # そのためlaoad_data()より前にself.dataを作っておく必要がある
    # このアルゴリズムの結果RankingModelが呼ばれると自動的にself.dataにはcsv_fileのデータが格納されていることになる。
    def __init__(self, csv_file=None, *args, **kwargs):
        if not csv_file:
            csv_file = self.get_csv_file_path()
        super().__init__(csv_file, *args, **kwargs)
        self.column = [RANKING_COLUMN_NAME, RANKING_COLUMN_COUNT]
        self.data = collections.defaultdict(int)
        self.load_data()

        # settingsがあればsettingsを指定
        # デフォルトではNoneとする
    def get_csv_file_path(self):
        """Set csv file path.

        Use csv path if set in settings, otherwise use default
        """
        csv_file_path = None

        try:
            import settings
            if settings.CSV_FILE_PATH:
                csv_file_path = settings.CSV_FILE_PATH
        except ImportError:
            pass

        if not csv_file_path:
            csv_file_path = RANKING_CSV_FILE_PATH
        return csv_file_path


    def load_data(self):
        """Load csv data.

        Returns:
            dict: Returns ranking data of dict type
        """
        #csvfileを辞書型で読み込み、csvfileの一覧を取得する。forで回してreturnする
        #defaultdict(<class 'int'>, {'Fdd': 1}):self.dataの中身
        with open(self.csv_file, 'r+') as csv_file:
            reader = csv.DictReader(csv_file)
            for row in reader:
                self.data[row[RANKING_COLUMN_NAME]]=int(
                    row[RANKING_COLUMN_COUNT])
        return self.data


    def save(self):
        """Save data to csv file"""
        #ファイルを開き書き込みとし、self.columでfilednameを指定
        #親のselfで宣言したseld.dataをfor in の形でself.data.itemsでキーバリューでname,countに入れる
        #name,countをwriterowで使い書き込む。

        with open(self.csv_file, 'w+') as csv_file:
            writer = csv.DictWriter(csv_file, fieldnames=self.column)
            writer.writeheader()

            for name, count in self.data.items():
                writer.writerow({
                    RANKING_COLUMN_NAME: name,
                    RANKING_COLUMN_COUNT: count
                })


    def get_most_popular(self, not_list=None):
        """
        Args:
            not_list(list): Excludes the name on the list

        Returns;
            str: Returns the data of the top most ranking
        """

        if not_list is None:
            not_list = []

        if not self.data:
            return None

        #self.data.get のgetは辞書型のget()でvalueが存在しない場合は任意のデフォルト値を返す。
        #何も指定しなければデフォルトでがNoneが返される

        sorted_data = sorted(self.data, key=self.data.get, reverse=True)
        for name in sorted_data:
            if name in not_list:
                continue
            return name





    def increment(self, name):
        """Increase rank for the give name."""
        #title():文字列を、単語ごとに大文字から始まり、残りの文字のうち大小文字の区別があるものは全て小文字にする、タイトルケースにして返します。
        #self.dataにnameを追加し、プラス１する。存在する場合はそのnameに追加する
        self.data[name.title()] += 1
        self.save()

