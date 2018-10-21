$(document).ready(function() {
  let long_url = 'https://www.google.com';

  $('#url-input').on('change', function() {
    long_url = $(this).val();
  });

  $('#shorten-btn-bitly').click(() => {
    getShortenBitly(long_url);
  });
  $('#shorten-btn-rebrandly').click(() => {
    getShortenRebrandly(long_url);
  });
});

const getShortenBitly = long_url => {
  const access_token = '8324dba029eabe687eaa842b81d508a45b5b84f0';

  $.ajax({
    url: 'https://api-ssl.bitly.com/v4/shorten',
    type: 'post',
    data: JSON.stringify({
      domain: 'bit.ly',
      long_url
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token
    },
    dataType: 'json',
    success: function(data) {
      console.log(data);
      $('#url-result-bitly').attr('href', data.link);
      $('#url-result-bitly').html(data.link);
    }
  });
};

const getShortenRebrandly = long_url => {
  const api_key = '71159306e52a40c4b496146fc7e14003';

  $.ajax({
    url: 'https://api.rebrandly.com/v1/links',
    type: 'post',
    data: JSON.stringify({
      destination: long_url,
      domain: { fullName: 'rebrand.ly' }
      //, "slashtag": "A_NEW_SLASHTAG"
      //, "title": "Rebrandly YouTube channel"
    }),
    headers: {
      'Content-Type': 'application/json',
      apikey: api_key
      // workspace: 'YOUR_WORKSPACE_ID'
    },
    dataType: 'json',
    success: function(link) {
      console.log(link);
      $('#url-result-rebrandly').attr('href', 'http://' + link.shortUrl);
      $('#url-result-rebrandly').html('http://' + link.shortUrl);
    }
  });
};
