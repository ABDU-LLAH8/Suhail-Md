const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348137229969";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_41_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDg3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU5LFxuICAgICAgICA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgODYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU4LFxuICAgICAgICA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWmQ0ZWlZdlhJTHlxMjdMU2c5VEpvbjhWS2NyOGVtbmRZSjZ0VEhlL21IRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicjBaeEhrR1BSRXk4SHZSMHltQWMxUVwiLFxuICBcInBob25lSWRcIjogXCJlOWE4OWMxOC1hYTYxLTRhNWQtODI3MC04ZjE3ZDQzNGVmOTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgMzgsXG4gICAgICAxOTMsXG4gICAgICA4NSxcbiAgICAgIDk4LFxuICAgICAgMjQ1LFxuICAgICAgMTU1LFxuICAgICAgMTExLFxuICAgICAgMjA5LFxuICAgICAgMjM1LFxuICAgICAgNjEsXG4gICAgICAyMDEsXG4gICAgICAxOTUsXG4gICAgICAxNzgsXG4gICAgICAxNDUsXG4gICAgICA2MyxcbiAgICAgIDI1LFxuICAgICAgMTE1LFxuICAgICAgNDcsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyLFxuICAgICAgNTcsXG4gICAgICAxNTUsXG4gICAgICAxOTcsXG4gICAgICAxNjcsXG4gICAgICAzOCxcbiAgICAgIDEyMSxcbiAgICAgIDIwMyxcbiAgICAgIDY4LFxuICAgICAgNDUsXG4gICAgICA5LFxuICAgICAgMTAyLFxuICAgICAgMTMwLFxuICAgICAgNCxcbiAgICAgIDE0MyxcbiAgICAgIDI4LFxuICAgICAgMjM3LFxuICAgICAgMTU2LFxuICAgICAgMzgsXG4gICAgICAxMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzFaODI0RlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzcyMjk5Njk6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImFiLXUgZ2xvYmFsIGVudGVycHJpc2VcIixcbiAgICBcImxpZFwiOiBcIjMxNjk2ODU4NzY4Mjc6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMnVtNUlHRU51bjViUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm4rOXZpRmRvRURTRXlPUUNidUlkWDV4MjlsYVpDVmFwVGdwZjlmYlh2VE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQy9lK1YvREVKaVJGOTRsR1gwcm1CZGkxbHhMaHBKYWc5VW9nZVludUt2N2V2dm0vVFNudm1SRW9uK2lFcWZ1dTlBYTZueENJL0xFTEUrT1k3ZWM5Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZnJoVExZYlRzWUYvNjNjS21rV0NCQmtMbVFkdW54a0p0US9rMVp2c25UYndVa3VhSkJadjBTQ3RSRWZwQ2hQd3hIaHJKS0U3ZW80OTR2L1JhRmY2QVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNzIyOTk2OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzI0NTExXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==  "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
