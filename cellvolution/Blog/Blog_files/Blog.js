// Created by iWeb 3.0.4 local-build-20120615

setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://www.celvolution.com/cellvolution/Blog/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Blog_files/BlogMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
