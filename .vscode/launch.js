{  Use IntelliSense to learn about possible attributes.
  Hover to view descriptions of existing attributes.
  For more information, 
  visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": 0.2,
  "configurations": 
    [{ "type": "msedge",
"request": "launch",
"name": "Launch Microsoft Edge", "url": "http://localhost:5000/samples/",
"webRoot": "${workspaceFolder}","sourceMapPathOverrides":{ "webpack-internal:
"${webRoot}/packages/bundle/ "webpack://botframework-webchat/component:/
//"webpack://botframework-webchat/core: 
///*": "${webRoot}/packages/core}},
{"type": "vscode-edge-devtools.debug", 
 "request": "launch",
"name": "Launch Microsoft Edge and open the Elements tool",
"url": "http://localhost:5000/samples/",
"webRoot": "${workspaceFolder}",
 "sourceMapPathOverrides": {"webpack-internal:/
  //
  /:"${webRoot}/packages,
  "webpack://botframework-webchat/bundle:/
 //:"${webRoot}/packages/bundle/,
  "webpack://botframework-webchat/component:/
   //: "${webRoot}/packages/component",
 "webpack://botframework-webchat/core:
  //:"${webRoot}/packages/core/" 
   }
