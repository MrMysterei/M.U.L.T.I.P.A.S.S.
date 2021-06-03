import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'Multipass';
  masterLinksList: any[] = [
    { "id": 31, "categoryId": 1, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Exception Not Found", "url": "https://exceptionnotfound.net"},
    { "id": 32, "categoryId": 1, "dateAdded": "2021-01-01" , "target": "_blank", "title": "StrathWeb", "url": "https://www.strathweb.com"},
    { "id": 33, "categoryId": 1, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Code Review", "url": "https://codereview.stackexchange.com"},
    { "id": 34, "categoryId": 1, "dateAdded": "2021-01-01" , "target": "_blank", "title": "C# Corner", "url": "http://www.c-sharpcorner.com"},
    { "id": 35, "categoryId": 1, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Coding Horror", "url": "https://blog.codinghorror.com"},
    { "id": 17, "categoryId": 2, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Draw.io", "url": "https://www.draw.io/"},
    { "id": 18, "categoryId": 2, "dateAdded": "2021-01-01" , "target": "_blank", "title": "VvvebJs", "url": "https://github.com/givanz/VvvebJs"},
    { "id": 19, "categoryId": 2, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Moqups", "url": "https://app.moqups.com/"},
    { "id": 23, "categoryId": 3, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Browser Stack", "url": "https://www.browserstack.com/users/sign_in"},
    { "id": 24, "categoryId": 3, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Labelary", "url": "http://labelary.com/"},
    { "id": 25, "categoryId": 3, "dateAdded": "2021-01-01" , "target": "_blank", "title": "RegexLib.com", "url": "http://www.regexlib.com"},
    { "id": 26, "categoryId": 3, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Down For Everyone", "url": "http://downforeveryoneorjustme.com/"},
    { "id": 27, "categoryId": 3, "dateAdded": "2021-01-01" , "target": "_blank", "title": "SpritePad", "url": "http://spritepad.wearekiss.com/"},
    { "id": 28, "categoryId": 3, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Password Generator", "url": "https://passwordsgenerator.net/"},
    { "id": 36, "categoryId": 4, "dateAdded": "2021-01-01" , "target": "_blank", "title": "The Morning Brew", "url": "http://blog.cwa.me.uk"},
    { "id": 37, "categoryId": 4, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Scott Hanselman's Blog", "url": "http://www.hanselman.com/blog/"},
    { "id": 38, "categoryId": 4, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Geeks With Blogs", "url": "http://geekswithblogs.net/Default.aspx"},
    { "id": 39, "categoryId": 4, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Black Rabbit Coder", "url": "http://geekswithblogs.net/BlackRabbitCoder/Default.aspx"},
    { "id": 40, "categoryId": 4, "dateAdded": "2021-01-01" , "target": "_blank", "title": "K. Scott Allen", "url": "http://odetocode.com/blogs/scott/"},
    { "id": 41, "categoryId": 4, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Mike's Dot-Netting", "url": "https://www.mikesdotnetting.com"},
    { "id": 42, "categoryId": 4, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Rick Strahl", "url": "https://weblog.west-wind.com"},
    { "id": 43, "categoryId": 4, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Simple-Talk Blog", "url": "https://www.red-gate.com/simple-talk/dotnet/"},
    { "id": 44, "categoryId": 4, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Stack Overflow", "url": "https://stackoverflow.com"},
    { "id": 45, "categoryId": 4, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Phil Haack Blog", "url": "http://haacked.com"},
    { "id": 46, "categoryId": 4, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Productive Rage", "url": "http://www.productiverage.com"},
    { "id": 47, "categoryId": 4, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Code Opinion", "url": "https://codeopinion.com"},
    { "id": 48, "categoryId": 4, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Rubik's Code", "url": "https://rubikscode.net"},
    { "id": 49, "categoryId": 5, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Code Wars", "url": "https://www.codewars.com"},
    { "id": 50, "categoryId": 5, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Rico's Cheat Sheets", "url": "https://devhints.io"},
    { "id": 51, "categoryId": 5, "dateAdded": "2021-01-01" , "target": "_blank", "title": "W3 Schools", "url": "https://www.w3schools.com"},
    { "id": 52, "categoryId": 5, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Can I Use...", "url": "https://caniuse.com"},
    { "id": 53, "categoryId": 5, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Can I Email...", "url": "https://www.caniemail.com"},
    { "id": 54, "categoryId": 5, "dateAdded": "2021-01-01" , "target": "_blank", "title": "MSDN Documentation", "url": "https://docs.microsoft.com/en-us/"},
    { "id": 59, "categoryId": 8, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Dont Hit Save", "url": "https://donthitsave.com"},
    { "id": 60, "categoryId": 8, "dateAdded": "2021-01-01" , "target": "_blank", "title": "XKCD", "url": "https://xkcd.com"},
    { "id": 61, "categoryId": 8, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Order Of the Stick", "url": "http://www.giantitp.com/comics/oots.html"},
    { "id": 62, "categoryId": 8, "dateAdded": "2021-01-01" , "target": "_blank", "title": "SMBC : Saturday Morning Breakfast Cereal", "url": "https://www.smbc-comics.com"},
    { "id": 63, "categoryId": 6, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Online Pirate Translator", "url": "http://pirate.monkeyness.com/online_pirate_translator"},
    { "id": 64, "categoryId": 7, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Hacker News", "url": "https://news.ycombinator.com"},
    { "id": 65, "categoryId": 7, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Weather Underground", "url": "https://www.wunderground.com"},
    { "id": 66, "categoryId": 7, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Acko.net", "url": "http://acko.net"},
    { "id": 67, "categoryId": 7, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Hackaday", "url": "http://www.hackaday.com"},
    { "id": 68, "categoryId": 7, "dateAdded": "2021-01-01" , "target": "_blank", "title": "Zines - Julia Evans", "url": "https://jvns.ca/zines/"},
    { "id": 69, "categoryId": 7, "dateAdded": "2021-01-01" , "target": "_blank", "title": "National Hurricane Center", "url": "http://www.nhc.noaa.gov"}
  ];

  category1List: any[];
  category1Title: string = "Dev Utils";
  category2List: any[];
  category2Title: string = "UI Tools";
  category3List: any[];
  category3Title: string = "Misc Utils";
  category4List: any[];
  category4Title: string = "Some Stuff";
  category5List: any[];
  category5Title: string = "Dev Logging Links";
  category6List: any[];
  category6Title: string = "Reference";
  category7List: any[];
  category7Title: string = "Storm Prep Links";
  category8List: any[];
  category8Title: string = "Fun Stuff";

  ngOnInit(): void {
    this.category1List = this.masterLinksList.filter(this.GetCategory1Links);
    this.category2List = this.masterLinksList.filter(this.GetCategory2Links);
    this.category3List = this.masterLinksList.filter(this.GetCategory3Links);
    this.category4List = this.masterLinksList.filter(this.GetCategory4Links);

    this.category5List = this.masterLinksList.filter(this.GetCategory5Links);
    this.category6List = this.masterLinksList.filter(this.GetCategory6Links);
    this.category7List = this.masterLinksList.filter(this.GetCategory7Links);
    this.category8List = this.masterLinksList.filter(this.GetCategory8Links);
  }

  GetLinksByCategory(links, catId) {
    console.log("cat id: " + links);
    return (links.CategoryId == catId);
  }
  
  GetCategory1Links(link) { 
   return (link.categoryId == 1);
  }
  GetCategory2Links(link) { 
   return (link.categoryId == 2);
  }
  GetCategory3Links(link) { 
   return (link.categoryId == 3);
  }
  GetCategory4Links(link) { 
   return (link.categoryId == 4);
  }

  GetCategory5Links(link) { 
   return (link.categoryId == 5);
  }
  GetCategory6Links(link) { 
   return (link.categoryId == 6);
  }
  GetCategory7Links(link) { 
   return (link.categoryId == 7);
  }
  GetCategory8Links(link) { 
   return (link.categoryId == 8);
  }
}
