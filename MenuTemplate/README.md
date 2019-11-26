This is a snippet for my basic Menu Template.


C# Server Side

Add The Line Below where ever you wanna create a menu.

player.Emit("CreateMenu", int MenuID, string MenuTitle, string MenuIcon, string Menu Title, string Button 1, string Button 2, string Button 3, string Button 4, string Button 5,string Button 6, string Button 7, int Button1 Price, int Button2 Price, int Button3 Price, int Button4 Price, int Button5 Price, int Button6 Price, int Button7 Price);


EXAMPLE

player.Emit("CreateMenu", Store, "Burger King", "shop", "Welcome To The ", "Burger", "Chicken Burger", "Beef Burger", "Pizza", "Nuggets",
"Beef Pizza", "Chicken Pizza", "&pound;"+50 , "&pound;" + 60, "&pound;" + 70, "&pound;" + 80, "&pound;" + 90, "&pound;" + 100, "&pound;" + 200);
