# ZSH
> https://datasciocean.tech/others/beautify-terminal-on-macos/


## install zsh
```
brew install zsh
```

## download Oh My Zsh
```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## download Powerlevel10k theme
```
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

```

## modify ZSH_THEME
```
$ vim ~/.zshrc

# ZSH_THEME="robbyrussell"
ZSH_THEME="powerlevel10k/powerlevel10k"
```

## download MesloLGS NF Regular.ttf for Powerlevel10k
```
https://github.com/romkatv/dotfiles-public/raw/master/.local/share/fonts/NerdFonts/MesloLGS%20NF%20Regular.ttf
```

## setup Powerlevel10k
```
p10k configure
```

