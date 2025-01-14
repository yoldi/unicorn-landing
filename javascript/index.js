async function getUtmInviteLink() {
  if(!window.location.search.includes("utm")) return
  const response = await fetch(`https://api.crm.poizonshop.ru/api/utm-invite-link${window.location.search}`);
  if(response.ok) {
    const res = await response.json();
    setUrls(res.inviteLinkUrl, res.botStartUrl)
  }
}

const setUrls = (channelInviteUrl, botStartUrl) => {
  // channel-invite-link
  if(channelInviteUrl) {
    const channelInviteLink = document.getElementsByClassName('channel-invite-link');
    for (let i = 0; i < channelInviteLink.length; i++) {
      channelInviteLink[i].setAttribute('href', channelInviteUrl);
    }
  }

  // bot-start-link
  if(botStartUrl) {
    const botStartLink = document.getElementsByClassName('bot-start-link');
    for (let i = 0; i < botStartLink.length; i++) {
      botStartLink[i].setAttribute('href', botStartUrl);
    }
  }
}


getUtmInviteLink()
