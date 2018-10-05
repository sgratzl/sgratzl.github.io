// JQuery
{% include js/jquery-3.3.1.min.js %}

// Bootstrap Core JavaScript
{% include js/bootstrap.min.js %}
{% include js/bootstrap.min.js %}

// Plugin JavaScript
{% include js/jquery.easing.min.js %}
{% include js/classie.js %}
{% include js/cbpAnimatedHeader.js %}

// Contact Form JavaScript
{% include js/jqBootstrapValidation.js %}
{% if site.contact == "static" %}
 {% include js/contact_me_static.js %}
{% else %}
 {% include js/contact_me.js %}
{% endif %}

// Custom Theme JavaScript
{% include js/freelancer.js %}
