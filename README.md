# FINE NAVBAR Directive

This project zet het menu (als navigatiebalk bovenin) van FINE op via de angular-ui/ui-router module:

[https://github.com/angular-ui/ui-router/](https://github.com/angular-ui/ui-router/)

## Onderdelen

```fine-navbar.html```: Bevat het HTML-fragment (HTML5 NAV-element, zie [hier](http://www.w3schools.com/tags/tag_nav.asp) 
voor meer informatie) met de placeholders voor de hoofdmenu's 

```ui-navbar.js```: Definieert de applicatie 'ui.navbar', die de generieke navigatiebalk bevat.

```fine-navbar.js```: Vult de generieke navigatiebalk met FINE-speficieke menu's, submenu's en menu-items

```index.html```: toont de navigatiebalk bovenin door ```ng-include``` van het fragment ```fine-navbar.html```. Deze index.html 
bevat ook een voettekst-panel en is een aanzet tot de definitieve paginaopzet.

 
## Structuur van het menu:
Er zijn hoofdmenu's op dit moment:
1. Link naar applicatieversie
2. FINE CRM
3. FINE Billing
4. Beheer
5. Mijn account



## Implementatie
Maak een eigen index.html die de volgende DIVs bevat:

1. Een DIV voor de navigatiebalk:

```
<div ng-controller="NavigationController">
```

2. Een DIV voor de inhoud van de schermen:

```
<div ui-view=""></div>
```

## Todo
1. Menuopties alleen tonen indien account geautoriseerd is 
