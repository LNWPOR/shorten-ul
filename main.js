$(document).ready(function() {
  let long_url = 'https://www.google.com';

  $('#url-input').on('change', function() {
    long_url = $(this).val();
  });

  $('#shorten-btn-bitly').click(() => {
    getShortenBitly(long_url);
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
