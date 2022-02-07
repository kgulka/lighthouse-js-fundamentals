let facebookProfile = {
  name: "Kent",
  friends: 10,
  messages: ["first msg", "scond one", "Third msg"],

  postMessage: function postMsg(message) {
      facebookProfile.messages.push(message);
  },

  deleteMessage: function deleteMsg(index) {
    facebookProfile.messages.splice(index,1);
  },
  addFriend: function addFrnd() {
      faceBookProfile.friends +=1;
  },
  removeFriend: function delFrnd() {
    facebookProfile.friends -=1;
  }
};