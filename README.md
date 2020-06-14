# ansi-to-iso-extension
Firefox extension for the website typing-lessons.org to support German keyboard layout

## Rationale

The website [typing-lessons.org](https://www.typing-lessons.org) offers a really awesome course to learn the ten-finger 
touch typing technique. Peter's minimalistic approach, together with his "Principles of Effective Learning" 
([source](https://www.typing-lessons.org/preliminaries_1.html)) are a great way to improve your typing skills. 

The only downside of Peter's Online Typing Course in my opinion is that it is only available for ANSI keyboards. 
Since I want to keep using my German keyboard layout but still follow Peter's typing lessons, I wrote this little 
Firefox Extension, which tries to map the ANSI keyboard layout to the German ISO keyboard layout. 

Since ANSI and DE-ISO keyboards have a different number of keys, a perfect 1:1 mapping from ANSI to ISO layout is
not possible. With my approach, I tried to stick to the phyiscal positioning of keys on the keyboard, instead of mapping 
the actual characters from ANSI to ISO. This means that during the typing lessons, the characters you are learning 
with each lessons might differ (e.g `ö/Ö` instead of `;/:`) but the position and movements of your fingers will stay mostly
the same. 

There are still some issues with this mapping approach:
* Dead keys are not recognized, which means `` ` ´`` (tick and backtick), as well as `^` will not work
* `</>` characters are left out of the mapping (105-key ISO keyboard vs. 104-key ANSI keyboard) by my choice
* The complete 'AltGr' meta-key layer is left out, which means no `{,},[,]` unfortunately :(  

Although the mapping is not perfect, this add-on enables you to enjoy a large part of Peter's Online Typing Lessons
using a German keyboard, which is still a good thing I think.

Happy typing!


## Installation

1) In your Firefox browser go to `Preferences` > `Extensions & Themes` and choose `Install Add-on from File ...`

2) Select the file `ansi_to_iso-1.0-fx.xpi` 

3) Go to `typing-lessons.org` and check if the page title has the suffix `(for ISO keyboards)` which indicates that the
add-on is working as expected. 

## Signing 

In case you want to modify/extend this add-on even further (maybe with your own custom mappings or keyboard layout), 
you can use the following command to pack the source files
into a `.zip` file, which you can then upload to the Firefox Develop Hub to have the add-on signed. 

```
zip -r -FS ansi-to-iso.zip * --exclude '*.git*' '.idea' 
```



