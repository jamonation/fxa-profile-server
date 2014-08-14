/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const db = require('../../db');

function avatars(list) {
  return {
    avatars: list
  };
}

module.exports = {
  auth: {
    strategy: 'oauth',
    scope: ['profile', 'profile:avatar']
  },
  handler: function avatarList(req, reply) {
    db.getAvatars(req.auth.credentials.user).then(avatars).done(reply, reply);
  }
};

