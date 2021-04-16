import os
import string

def get_template_path():
    """Return the path of the template's directory"""
    #表示するtemplateのパスを取得する
    #はじめにreturnで返す変数をnoneで宣言
    #次にtemplatesフォルダまでのパスを取得する。

    template_dir_path = None


    if not template_dir_path:
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        template_dir_path = os.path.join(base_dir, 'templates')

    return template_dir_path

class NoTemplateError(Exception):
    """No Template Error"""




def find_temlate(temp_file):
    # temp は臨時の意味
    """Find for template file tn the given location
    
    Returns:
        str: The template file path

    Raises:
        NoTemplateError: if the file does not exists
    """
    #出力するtemlateTextをの場所を見つける（robotのhello関数で指定されたものをtext名を探す）
    #get_template_dir_pathの返り値を変数に入れる
    #それを元に指定されたText名を加えたPathを取得する
    #Text名がなければget_template_pathはNoneを返す
    #もしなければNotemlateErrorでエラー処理を行いねぇぞとReturnを返す

    template_dir_path = get_template_path()
    temp_file_path = os.path.join(template_dir_path, temp_file)
    if not os.path.exists(temp_file_path):
        raise NoTemplateError('Could not find {}'.format(temp_file))
    return temp_file_path


def get_template(template_file_path):
    """Return the path of the template

    Args:
        template_file_path(str): the template file path
        coler: (str): Color formatting for output in terminal
            See in more details: https://pypi.python.org/pypi/termcolor

    Returns:
        string.Template: Return templates with characters in templates.
    """
    #robot.pyのhello関数に指定されたファイルをfind_templateからtemplatePathを取得
    #取得したパスを開き、デザインした出力形式になるように変更する
    #結果をreturnで返す。その際stringモジュールを使う

    template = find_temlate(template_file_path)
    with open(template, 'r', encoding='utf-8') as template_file:
        contents = template_file.read()
        contents = contents.rstrip(os.linesep)
        contents = '{splitter}{sep}{contents}{sep}{splitter}{sep}'.format(
            contents=contents, splitter='=' * 60, sep=os.linesep)

        return string.Template(contents)







