---
title: Useful select option selectors
abstract: 'No more cycles to identify current option in select html element'
createdAt: 20201018
createdAtDisplay: 'October 18, 2020'
published: false
tags: []
---
<pre><code class="javascript">
const selectedCountry = '<?=$country?>';
var selectedVisitorType = '<?=$visitor_type?>';
var selectedContactFrom = '<?=$contact_from?>';
document.querySelector('select[name="country"] [value="' + selectedCountry + '"]').selected = true;
document.querySelector('select[name="visitor_type"] [value="' + selectedVisitorType + '"]').selected = true;
    document.querySelector('select[name="contact_from"] [value="' + selectedContactFrom + '"]').selected = true;

</code></pre>
