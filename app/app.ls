# Declare app level module which depends on filters, and services

angular.module('scroll', []).value('$anchorScroll', angular.noop)

angular.module \app <[ui partials app.controllers hub.g0v.tw ui.state ui.bootstrap]>
.config <[$stateProvider $urlRouterProvider $locationProvider]> ++ ($stateProvider, $urlRouterProvider, $locationProvider) ->
  $stateProvider
    .state 'authz' do
      url: '/authz/{request}'
      templaetUrl: '/partials/authz.html'
      controller: \AuthzCtrl
    .state 'about' do
      url: '/about'
      templateUrl: '/partials/about.html'
    .state 'project' do
      url: '/project'
      templateUrl: '/partials/project.html'
      controller: \ProjectCtrl
    .state 'project.detail' do
      url: '/{projectName}'
    .state 'people' do
      url: '/people'
      templateUrl: '/partials/people.html'
      controller: \PeopleCtrl
    .state 'tag' do
      url: '/tag/{tag}'
      templateUrl: '/partials/tag.html'
      controller: \TagControl
    .state 'hack' do
      url: '/{hackId}'
      templateUrl: '/partials/hack.html'
      controller: \HackFolderCtrl
      onEnter: ->
        $ \body .addClass \hide-overflow
      onExit: ->
        $ \body .removeClass \hide-overflow
    .state 'hack.doc' do
      url: '/{docId}'

  $urlRouterProvider
    .otherwise('/g0v-hackath3n')

  $locationProvider.html5Mode true

.run <[$rootScope $state $stateParams $location]> ++ ($rootScope, $state, $stateParams, $location) ->
  $rootScope.$state = $state
  $rootScope.$stateParam = $stateParams
  $rootScope.go = -> $location.path it
  $rootScope._build = window.global.config.BUILD
