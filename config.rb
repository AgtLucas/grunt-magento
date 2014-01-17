preferred_syntax = :sass

http_path = '/'

css_dir = 'theme/skin/frontend/gm/default/css'
sass_dir = 'theme/skin/frontend/gm/default/sass'
images_dir = 'theme/skin/frontend/gm/default/images'
# javascripts_dir = 'app/scripts'

relative_assets = false
line_comments = true
output_style = :compressed

asset_cache_buster :none

Sass::Script::Number.precision = 8