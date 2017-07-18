import os


def get_file_contents(path):
    file_content = ''
    with open(path, 'r') as f:
        file_content = f.read()
    return file_content


BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

THEME_DIR = os.path.join(BASE_DIR, 'theme')
HTML_PATH = os.path.join(THEME_DIR, 'theme.html')
CSS_PATH = os.path.join(THEME_DIR, 'theme.css')
JS_PATH = os.path.join(THEME_DIR, 'script.js')

EXPORT_DIR = os.path.join(BASE_DIR, 'export')
EXPORT_PATH = os.path.join(EXPORT_DIR, 'theme.html')

if __name__ == '__main__':
    # Create the processed html string
    working_html = get_file_contents(HTML_PATH)
    working_html = working_html.replace(
        '/* INSERTCSSHERE */', get_file_contents(CSS_PATH))
    working_html = working_html.replace(
        '// INSERTJSHERE', get_file_contents(JS_PATH))

    # Create export directory
    if not os.path.exists(EXPORT_DIR):
        os.makedirs(EXPORT_DIR)

    # Export html string to export_path
    with open(EXPORT_PATH, 'w') as export:
        export.write(working_html)

    print('Theme successfully exported to "{}"'.format(EXPORT_PATH))
