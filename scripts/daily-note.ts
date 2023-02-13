// Name: Daily note
// Description: Generate/open daily note to track progress at work.
// Author: Jon Linkens

import "@johnlindquist/kit";

const folderName = "Dailies";
const todaysDate = new Date().toDateString();

const noteBody = `
<h2>${todaysDate}</h2>
<br/>
<strong>Planned</strong>
<br/><br/><br/><br/>
<strong>Achieved</strong>
<br/><br/><br/><br/>
<strong>Notes</strong>
`;

await applescript(`
tell application "Notes"
  if folder "${folderName}" exists then
  else
    make new folder with properties {name: "${folderName}"}
  end if
  tell folder "${folderName}"
    if note "${todaysDate}" exists then
      show note "${todaysDate}"
    else
      make new note with properties {name:"${todaysDate}", body:""}
      tell note "${todaysDate}"
        set body to "${noteBody}"
      end tell
      show note "${todaysDate}"
    end if
  end tell
end tell
`);
