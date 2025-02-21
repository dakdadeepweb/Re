const members = {
    s4rinhawzz__: "https://cdn.tupperbox.app/pfp/1298350007807901809/shekUeLs3RDy1hHz.webp",
    https_meow: "https://cdn.discordapp.com/avatars/1145432694889648249/def545e7cc468aa753c7824e29cbea0b.png?size=256",
    dakdadeepweb: "https://cdn.discordapp.com/avatars/1298350007807901809/6e25dc00768fc42e7eec1d4815a8a4ea.png?size=256",
    phoenix: "https://cdn.discordapp.com/avatars/1092109376652857499/eae8998854c1dcfd9c5f4088f3c42669.png?size=256"
};

window.onload = function() {
    for (const member in members) {
        const memberElement = document.getElementById(`member-${member}`);
        const avatarElement = memberElement.querySelector('img');
        avatarElement.src = members[member];
    }
};
