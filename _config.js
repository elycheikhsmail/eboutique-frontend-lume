import lume from "lume/mod.ts";

const site = lume();
site.copy("js", "js")
//site.copy("css", "css") 
site.ignore("convert.txt","mydata","README.md");

export default site;
