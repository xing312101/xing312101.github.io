# Ramdisk

```
$ cd ~/Library/LaunchAgents
$ mv xing.ramdisk.plist LaunchAgents
$ launchctl load xing.ramdisk.plist

```

## xing.ramdisk.plist
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>EnvironmentVariables</key>
	<dict>
	<key>PATH</key>
		<string>/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin</string>
	</dict>
	<key>Label</key>
		<string>xing.ramdisk</string>
	<key>ProgramArguments</key>
	<array>
		<string>/bin/zsh</string>
		<string>/Users/xing/scripts/ramdisk.sh</string>
	</array>
	<key>RunAtLoad</key>
		<true/>
	<key>StandardErrorPath</key>
		<string>/tmp/ramdisk.err</string>
	<key>StandardOutPath</key>
	<string>/tmp/ramdisk.out</string>
</dict>
</plist>
```


## script
```
#!/bin/zsh

dName="RamDisk"
cPath="/Users/$USER/Library/Caches"

folder=(
Google
BraveSoftware
Firefox
)

diskutil partitionDisk $(hdiutil attach -nomount ram://16384000) GPT APFS ${dName} 0

for fName in ${folder}; do
        rm -rf "${cPath}/${fName}"
        ln -sf "/Volumes/${dName}/${fName}" "${cPath}/${fName}"
        mkdir "/Volumes/${dName}/${fName}"
done


```