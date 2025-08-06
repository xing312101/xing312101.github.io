# Ruby on Rails
> https://ruby-doc.org/

> http://rubyonrails.org/

> http://apidock.com/

> http://api.rubyonrails.org/


## convention over configuration
最重要的觀念：慣例優於設定

### const_missing, method_missing
黑魔法

## install rails
> 要先有ruby環境，可以先建置RVM的設定

```
$ gem install rails [-v version]
```

## Commands
### bundle
```
bundle install
bundle install --without development test
```

### gem
```
gem install someGemName

不安裝文件的參數
--no-rdoc and --no-ri

default:
echo 'gem: --no-document' >> ~/.gemrc
```

### rails
```
rails c
rails new projectName
rails new demo -d mysql
rails new demo -d oracle
rails server # rails s -p 8000
rails server -e production

rails generate controller controllerName
rails destroy controller controllerName
rails g model modelName
rails g migration migratationName
```

### rake
```
rake about //環境設定
rake db:create //創建資料庫
rake db:drop // 刪除資料庫
rake db:migrate
rake db:migrate RAILS_ENV="production"
rake db:schema:load RAILS_ENV=production

rake db:rollback //回朔資料庫
rake db:seed //依照 db/seeds.rb 新增資料到資料庫
```

### assets
```
config.assets.compile = true
config.assets.precompile = ['*.js', '*.css', '*.css.erb']
config.serve_static_files = true

production need add in env.rb:
config.assets.compile = true
config.serve_static_assets = true ### rails 3
config.serve_static_files = true ### rails 4

rake assets:clean
rake tmp:clear
rake assets:clobber
rake assets:precompile
# production mode 在precompiler會多做一些事情會比較慢，但其實不是production mode出來的assets也可以給production用
rake assets:clean RAILS_ENV=production
rake assets:precompile RAILS_ENV=production
rake assets:clobber RAILS_ENV=production

bundle exec rake assets:precompile
```


## change master key
> https://medium.com/cedarcode/rails-5-2-credentials-9b3324851336


## quickly develop gem in rails
```
in Rails Gemfile
gem 'gemName', :path => "GemProject"

# must uninstall the gem and rm gem file in the gems.

$ bundle exec rackup server...
```

## vscode extension
> https://dev.to/thomasvanholder/10-vs-code-extensions-for-ruby-on-rails-developers-89a

```
* Ruby
Ruby
Ruby Solargraph
Endwise
ERB Helper tags
Rails DB Schema
Rubocop
ERB Formatter
Emmet in ERB

* General
Atom Dark Theme
VSCode-icons
DotENV
Output Colorizer
Auto Rename Tag
Highlight Matching Tag
Bracket Pair Colorizer 2
```