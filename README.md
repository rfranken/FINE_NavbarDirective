# FINE NAVBAR Directive

This project zet het menu (als navigatiebalk bovenin) van FINE op via de angular-ui/ui-router module:

[https://github.com/angular-ui/ui-router/](https://github.com/angular-ui/ui-router/)

## Onderdelen:

###```ui-navbar.js```: Definieert de applicatie 'ui.navbar', die de generieke navigatiebalk bevat.
###```fine-navbar.js```: Vult de generieke navigatiebalk met FINE-speficieke menu's, submenu's en menu-items
###```index.html```: toont de navigatiebalk bovenin. Deze index.html is alleen voor demonstratie- en testdoeleinden.
 
## Structuur van het menu:
Er zijn drie hoofdmenu's op dit moment:
0. Link naar applicatieversie
1. FINE CRM
2. FINE Billing
3. Beheer
4. Mijn account



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
