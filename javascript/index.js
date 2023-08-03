async function getUtmInviteLink() {
  const response = await fetch(`https://api.crm.poizonshop.ru/api/utm-invite-link${window.location.search}`);
  if(response.ok) {
    const res = await response.json();
    console.log(res)
    setUrls(res.inviteLinkUrl, res.botStartUrl)
  }
}

const setUrls = (channelInviteUrl, botStartUrl) => {
  // channel-invite-link
  const channelInviteLink = document.getElementsByClassName('channel-invite-link');
  for (let i = 0; i < channelInviteLink.length; i++) {
    channelInviteLink[i].setAttribute('href', channelInviteUrl);
  }

  // bot-start-link
  const botStartLink = document.getElementsByClassName('bot-start-link');
  for (let i = 0; i < botStartLink.length; i++) {
    botStartLink[i].setAttribute('href', botStartUrl);
  }
}


getUtmInviteLink()
