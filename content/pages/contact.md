---
title: Contact
sections:
  - section_id: contact
    type: section_contact
    background: gray
    title: Contact Us By Signing Up
    content: |
      Add your details here and we will contact you.
    form_id: contactForm
    form_fields:
      - input_type: text
        name: name
        label: Name
        is_required: true
      - input_type: email
        name: email
        label: Email
        is_required: true
      - input_type: number
        name: lorem-ipsum
        label: lorem-ipsum
        default_value: lorem-ipsum
        options: []
        is_required: false
        type: form_field
      - input_type: select
        name: subject
        label: What do you sell?
        default_value: Please select
        options:
          - Food
          - Clothes
          - Electronics
          - Others
      - input_type: textarea
        name: message
        label: Message
      - input_type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
        is_required: true
    submit_label: Send Message
seo:
  title: Contact
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: This is the contact page
layout: landing
---
