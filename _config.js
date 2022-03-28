import lume from "lume/mod.ts";

const site = lume();
site.copy("js", "js")
site.copy("css", "css") 
site.copy("img", "img") 
site.ignore("convert.txt","mydata","README.md");

export default site;
