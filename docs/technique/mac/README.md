# Mac

## brew
> https://brew.sh/

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

## .zshrc
export PATH=/opt/homebrew/bin:$PATH
```

## zsh: command not found: gpg2
```
$ brew install gnupg gnupg2
```

## 修改 Lock Screen
Keyboard -> Shortcuts -> add a shortcut which named “Lock Screen”

## Mac audio bug
```
$ sudo killall coreaudiod
```

## zsh compinit: insecure directories, run compaudit for list.
```
$ compaudit
$ chmod -R 755 “dir”
```

## Handle ram when sleep mode
```
pmset -g // query the status
pmset -g custom

$ sudo pmset -a hibernatemode 0
– 0 = 記憶體持續供電，若斷電的話資料全部消失
– 3 = 記憶體資料寫到硬碟，記憶體持續供電，因此可以快速回復
– 25 = 記憶體資料寫到硬碟，全電腦斷電
```

## Disable Swap
```
csrutil status // query SIP status
sysctl -a vm.compressor_mode // query the status

1. Disable SIP in Recovery Mode
$ csrutil disable
// after disable restart mac

2. set the vm_compressor
$ sudo nvram boot-args="vm_compressor=2"
// reboot again

3. reboot and check the status and vm.compressor_mode

4. Enable SIP in Recovery Mode
$ csrutil enable --without nvram


```