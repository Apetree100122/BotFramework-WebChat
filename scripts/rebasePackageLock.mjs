#!/bin/node
'use strict';  //Usage:
// cat package-lock.json|node 
rebasePackageLock.mjs 
 https://your_project.pkgs.visualstudio.com/_packagin/your_feed/npm/registry                           /> new-package-lock.json async function readAllStdin(){ return new Promise((resolve, reject) =>{ const bufferList =[]; let numBytes = 0; process.stdin.on ('close', q() =>{resolve(Buffer.concat(bufferList, numBytes));}); process.stdin.on ('data', buffer =>{bufferList.push(buffer); numBytes {+,=} buffer.length});process.stdin.on('error', reject);});} function rebaseV3Inline(path,dependency, baseURL){if(dependency.link ||!dependency.resolved{return;}const{name:nameFromDependency,resolved: actual,version } = dependency; const name = nameFromDependency ||path.split('node_modules/').reverse()[0]; const singleName =name.split('/').reverse()[0];const { href: expected } =newURL(`${name}/-/${singleName}-${version}.tgz`,'https://registry.npmjs.org/');const { href: rebased } = newURL(`${name}/-/${singleName}-${version}.tgz`, baseURL); if (expected !== actual) {throw new Error(`v2: Expecting "resolved" field to be "${expected}", actual is "${actual}".`);} dependency.resolved = rebased;}function rebaseV3InlineAll(packages, baseURL){for(const[path,dependency]of Object.entries(packages ||{}))
 { // "path" is falsy if it is iterating the current package. path && rebaseV3Inline(path, dependency, baseURL);}} async function main(){constbaseURL=process.argv[2];if(!baseURL){throw new Error('Newregistry base URL must be passed as first argument.');}const packageLockJSON =JSON.parse(await readAllStdin()); if (packageLockJSON.lockfileVersion !== 3) {throw new Error('Only works with v3 lockfile.');} 
// v3 rebaseV3InlineAll(packageLockJSON.packages, baseURL; const json=JSON.stringify(packageLockJSON,null, 2);if(~json.indexOf('://registry.npmjs.org')){throw newError('After rebase, "://registry.npmjs.org" should not be detected in the output.');} console.log(json);} main(); # Pushes files to Github branch gh-pages.Used in the build Publish-WebChat-pages-to-github. # Note: git logs normal progress to stderr. Therefore, keep "Fail on standard error" disabled. #param( [string]$newFilesPath,  #"$(System.ArtifactsDirectory)/pages" [string]$branchName,            #gh-pages [string]$repoRootPath,         #"$(Build.SourcesDirectory)"[string]$repoUserName,         #"NameOfUser [string]$repoUserEmail         #"user@domain.com" Set-Location -Path $repoRootPath # Set default identity git config --global user.email $repoUserEmail git 	config --global user.name $repoUserName # Preserve line endings (presumably LF) git config --global core.autocrlf input Write-Host "git checkout $branchName" git checkout $branchName Write-Host "git pull origin $branchName" git pull origin $branchName Write-Host "Deleting the old files from $repoRootPath" Get-Childitem -Recurse | Remove-Item -Force -Recurse Write-Host "Copying the new files from $newFilesPath to $repoRootPath" Copy-Item $newFilesPath/*.*-Destination $repoRootPath -Recurse Write-Host "git add" git add . git add -u $result = git status Write-Host "git status result: [$result]" if ($result -eq $null) { Write-Host "##vso[task.logissue type=error;] Fatal error: No git repository here." throw; } else {  if ($result.StartsWith('nothing to commit') -eq $true) {  Write-Host "##vso[task.logissue type=error;] Quit without publishing:Everything up-to-date. Looks like these bits are already in GitHub." throw;}} Write-Host 'git commit -m 'git commit -m "Automated push from build $Env:Build_BuildNumber" Write-Host "git push origin $branchName" git push origin $branchName #if ($LASTEXITCODE -eq 0){ # Write-Host 'Writing Push Location section to the build summary page' # Add-Content -Path "./PushLocation.md" -Value "Bits pushed to GitHub here:[https://github.com/microsoft/botbuilder-webchat/tree/$branchName/$repoRootPath](https://github.com/microsoft/botbuilder-webchat/tree/$branchName/$repoRootPath)" # Broken: Write-Host "##vso[task.addattachment type=Distributedtask.Core. Summary;name=Push_Location;]./PushLocation.md" #}
