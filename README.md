# React on rails
A pilot study to use react on Rails.
It is a simply example to use react component on rails server.
After add `react_on_rails` to Gemfile, just run `rails generate react_on_rails:install` to install the gem and basic files.
Reference: https://shakacode.gitbooks.io/react-on-rails/content/docs/tutorial.html

## How to run
1. run `bundle install` to install required gem files
2. run `npm run postinstall` to install required npm packages
3. run `foreman start -f Procfile.dev`
4. navigate to `http://localhost:3000/hello_world` to see the react component render in rails template
