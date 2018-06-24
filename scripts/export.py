import os


def get_file_contents(path):
    file_content = ''
    with open(path, 'r') as f:
        file_content = f.read()
    return file_content


base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

theme_dir = os.path.join(base_dir, 'theme')
html_path = os.path.join(theme_dir, 'theme.html')
css_path = os.path.join(theme_dir, 'theme.css')
js_path = os.path.join(theme_dir, 'script.js')

export_dir = os.path.join(base_dir, 'export')
export_path = os.path.join(export_dir, 'export.html')

if __name__ == '__main__':
    # Create the processed html string
    working_html = get_file_contents(html_path)
    working_html = working_html.replace(
        '/* INSERTCSSHERE */', get_file_contents(css_path))
    working_html = working_html.replace(
        '// INSERTJSHERE', get_file_contents(js_path))

    # Create export directory
    if not os.path.exists(export_dir):
        os.makedirs(export_dir)

    # Export html string to export_path
    with open(export_path, 'w') as export:
        export.write(working_html)

    print('Theme successfully exported to "{}"'.format(export_path))
