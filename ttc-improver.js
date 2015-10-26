


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>ttc-improver/ttc-improver.js at master · insideRobb/ttc-improver</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="insideRobb/ttc-improver" name="twitter:title" /><meta content="ttc-improver - Improve TTC UX and add features" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/15321538?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/15321538?v=3&amp;s=400" property="og:image" /><meta content="insideRobb/ttc-improver" property="og:title" /><meta content="https://github.com/insideRobb/ttc-improver" property="og:url" /><meta content="ttc-improver - Improve TTC UX and add features" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTUzMjE1Mzg6NDNmNDU1NmIzYzEyYzI2ZDQwMGFjYzdjZDc5YTQzMWU6MzY1MDk3NjY1NzA0NjkwMGFiYzI2YTE0M2I2MmVmNTU1MjE0OWFjY2M4YWM5OGQ0MDhiY2I4MWJlZDc0OWYyMw==--9c7392ebe996fb46fcd87c7378b1b30a31f228c7">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="5FF46318:094A:4B374AC:562E87B9" name="octolytics-dimension-request_id" /><meta content="15321538" name="octolytics-actor-id" /><meta content="insideRobb" name="octolytics-actor-login" /><meta content="c1b7127257b16d7cb5e1e6abfd92b7d00ea4c6d18ec16fe38f0a9e634d28afd1" name="octolytics-actor-hash" />

<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension4" content="Current repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="insideRobb">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="2a774a1ab8e3a4c2e74ad1b052fff2d83699e111" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-fe9a78fd76e46beaf95a4330cc4974f836bfe46d4e95396090e339a58144486c.css" integrity="sha256-/pp4/Xbka+r5WkMwzEl0+Da/5G1OlTlgkOM5pYFESGw=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-ed11b2e059c035eff96c8e0662efb7bbcffa8acc4978b0b94a8830b79ddf1736.css" integrity="sha256-7RGy4FnANe/5bI4GYu+3u8/6isxJeLC5Sogwt53fFzY=" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="1788654b38a6bff8bcaf885c578af31d">

      
  <meta name="description" content="ttc-improver - Improve TTC UX and add features">
  <meta name="go-import" content="github.com/insideRobb/ttc-improver git https://github.com/insideRobb/ttc-improver.git">

  <meta content="15321538" name="octolytics-dimension-user_id" /><meta content="insideRobb" name="octolytics-dimension-user_login" /><meta content="44958666" name="octolytics-dimension-repository_id" /><meta content="insideRobb/ttc-improver" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="44958666" name="octolytics-dimension-repository_network_root_id" /><meta content="insideRobb/ttc-improver" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/insideRobb/ttc-improver/commits/master.atom" rel="alternate" title="Recent Commits to ttc-improver:master" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/insideRobb/ttc-improver/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/insideRobb/ttc-improver/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:insideRobb"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-bell"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="insideRobb/ttc-improver">This repository</span>
  </div>
    <a class="dropdown-item" href="/insideRobb/ttc-improver/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>
    <a class="dropdown-item" href="/insideRobb/ttc-improver/settings/collaboration" data-ga-click="Header, create new collaborator">
      New collaborator
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/insideRobb"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@insideRobb" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/15321538?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">insideRobb</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/insideRobb" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="2a774a1ab8e3a4c2e74ad1b052fff2d83699e111" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="RiSCycy3EdaLXG29wtEqWSoqRlYTc5RgA6si5E3jkJQEt6qWHY5q9OPHqJqIx2pVYAcIuKiBwQT4Lr7uXKpxbg==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">

      <div class="container">

        <div class="clearfix">
          

<ul class="pagehead-actions">

  <li>
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="2a774a1ab8e3a4c2e74ad1b052fff2d83699e111" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="kJzSETaMikD9C+J7RpZvpiQ3n8HNMCvjN1fKCNlLle0Ds8M8MqFfoUJdkc0UCe3Pz1/+f3zkc6oCoI5IFw76Zw==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="44958666" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/insideRobb/ttc-improver/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Unwatch
          </span>
        </a>
        <a class="social-count js-social-count" href="/insideRobb/ttc-improver/watchers">
          2
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/insideRobb/ttc-improver/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="2a774a1ab8e3a4c2e74ad1b052fff2d83699e111" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="lLF5laE3xS5yEqXNaTDR2LL5Jhdhhok/H+xCa2wRMVogCReYYQ2MDJEMycHBTMZKRq9ukmfVGupf4Z3fhjnnfw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar insideRobb/ttc-improver"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/insideRobb/ttc-improver/stargazers">
          1
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/insideRobb/ttc-improver/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="2a774a1ab8e3a4c2e74ad1b052fff2d83699e111" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="MFHWOFFykuoCvqr4/miBSXn9OZyN26T5N0Nx1yrD32Pc09ZepFsccJgEb6Cz/Fc9r6ubO1SdTPa+sxaLEV8I+g==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star insideRobb/ttc-improver"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/insideRobb/ttc-improver/stargazers">
          1
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/insideRobb/ttc-improver/fork" class="btn-with-count" data-form-nonce="2a774a1ab8e3a4c2e74ad1b052fff2d83699e111" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="hhVKiiius55atsO9zkvYciaCNLUgdYK5/FVbMacplYXb4lj3MAdJhw3dxjHNoHYiYzRcs12VuZSoPmexXDaNlw==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of insideRobb/ttc-improver to your account"
                aria-label="Fork your own copy of insideRobb/ttc-improver to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
</form>
    <a href="/insideRobb/ttc-improver/network" class="social-count">
      0
    </a>
  </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="/insideRobb" class="url fn" itemprop="url" rel="author"><span itemprop="title">insideRobb</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/insideRobb/ttc-improver" data-pjax="#js-repo-pjax-container">ttc-improver</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline ">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/insideRobb/ttc-improver/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/insideRobb/ttc-improver" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /insideRobb/ttc-improver">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/insideRobb/ttc-improver/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /insideRobb/ttc-improver/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/insideRobb/ttc-improver/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /insideRobb/ttc-improver/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/insideRobb/ttc-improver/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /insideRobb/ttc-improver/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/insideRobb/ttc-improver/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /insideRobb/ttc-improver/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/insideRobb/ttc-improver/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /insideRobb/ttc-improver/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Settings">
        <a href="/insideRobb/ttc-improver/settings" aria-label="Settings" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_settings repo_branch_settings hooks /insideRobb/ttc-improver/settings">
          <span class="octicon octicon-gear"></span> <span class="full-word">Settings</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>
</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3 class="text-small text-muted"><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/insideRobb/ttc-improver.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3 class="text-small text-muted"><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:insideRobb/ttc-improver.git" readonly="readonly" aria-label="SSH clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3 class="text-small text-muted"><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/insideRobb/ttc-improver" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options text-small text-muted">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=push" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="2a774a1ab8e3a4c2e74ad1b052fff2d83699e111" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="EoucRsPebuK3o4RkXTVsqJDzPUCShd7lXaImYNcsGrmiJ4Q0AJXKk17IF8Wp4th54U+OA7sFew/wyeoRzoYZcQ==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=push" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="2a774a1ab8e3a4c2e74ad1b052fff2d83699e111" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="95RoBkzKsGyY4XyRxoiYmwFmHN4WQdlgp5UJHcSd8yRXBJXkwZPP5OCe9G3aBl1vMtiDzbLq6SdyNZscUDFGqQ==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=push" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="2a774a1ab8e3a4c2e74ad1b052fff2d83699e111" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Iy616aF3Mpo1zuKjAlUMC478QpBXpE0fXYAZiXJWi3Lh0dOvzPzUyD0gOrGvE2yb8nZO08EjB9zqMXxi/oab6w==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>
  <a href="https://mac.github.com" class="btn btn-sm sidebar-button" title="Save insideRobb/ttc-improver to your computer and use it in GitHub Desktop." aria-label="Save insideRobb/ttc-improver to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-desktop-download"></span>
    Clone in Desktop
  </a>

              <a href="/insideRobb/ttc-improver/archive/master.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of insideRobb/ttc-improver as a zip file"
                 title="Download the contents of insideRobb/ttc-improver as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/insideRobb/ttc-improver/blob/5e26e30062632eb9ca54200be0db3088e39aac99/ttc-improver.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:ac639252a4d4604ce9c8910277fe6b6c -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Find or create a branch…" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Find or create a branch…">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Find or create a branch…" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/insideRobb/ttc-improver/blob/master/ttc-improver.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/insideRobb/ttc-improver/branches" class="js-create-branch select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form" data-form-nonce="2a774a1ab8e3a4c2e74ad1b052fff2d83699e111" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="9jier2Uk9anxKzoV1WTMWqH0eoD2R+YqF9DFZdf0b5BBN4sHIwT88RomMPSKj7iSE/tBgUwUO4QsWsmRDqpU3Q==" /></div>
            <span class="octicon octicon-git-branch select-menu-item-icon"></span>
            <div class="select-menu-item-text">
              <span class="select-menu-item-heading">Create branch: <span class="js-new-item-name"></span></span>
              <span class="description">from ‘master’</span>
            </div>
            <input type="hidden" name="name" id="name" class="js-new-item-value">
            <input type="hidden" name="branch" id="branch" value="master">
            <input type="hidden" name="path" id="path" value="ttc-improver.js">
</form>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/insideRobb/ttc-improver/find/master"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/insideRobb/ttc-improver" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">ttc-improver</span></a></span></span><span class="separator">/</span><strong class="final-path">ttc-improver.js</strong>
    </div>
  </div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/insideRobb/ttc-improver/commit/0b5cf51df78a5701103eda9d7c0e35c64350c78c" data-pjax>
          0b5cf51
        </a>
        <time datetime="2015-10-26T09:36:47Z" is="relative-time">Oct 26, 2015</time>
      </span>
      <div>
        <img alt="@insideRobb" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/15321538?v=3&amp;s=40" width="20" />
        <a href="/insideRobb" class="user-mention" rel="author">insideRobb</a>
          <a href="/insideRobb/ttc-improver/commit/0b5cf51df78a5701103eda9d7c0e35c64350c78c" class="message" data-pjax="true" title="Improve Twitter Translation Center

Improve UX and add features to TTC - https://translate.twitter.com">Improve Twitter Translation Center</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>1</strong>
         contributor
      </a>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@insideRobb" height="24" src="https://avatars1.githubusercontent.com/u/15321538?v=3&amp;s=48" width="24" />
            <a href="/insideRobb">insideRobb</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/insideRobb/ttc-improver/raw/master/ttc-improver.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/insideRobb/ttc-improver/blame/master/ttc-improver.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/insideRobb/ttc-improver/commits/master/ttc-improver.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

      <a class="octicon-btn tooltipped tooltipped-nw"
         href="https://mac.github.com"
         aria-label="Open this file in GitHub Desktop"
         data-ga-click="Repository, open with desktop, type:mac">
          <span class="octicon octicon-device-desktop"></span>
      </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/insideRobb/ttc-improver/edit/master/ttc-improver.js" class="inline-form js-update-url-with-hash" data-form-nonce="2a774a1ab8e3a4c2e74ad1b052fff2d83699e111" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="xsvyTtLRfdl9keP7AyIZqvOcdIqOwrqhsu07vlpDrFnfxHQlcab0yQuE74oUu26nnNa8xRMFWx68tn61Kzs4qg==" /></div>
          <button class="octicon-btn tooltipped tooltipped-nw" type="submit"
            aria-label="Edit this file" data-hotkey="e" data-disable-with>
            <span class="octicon octicon-pencil"></span>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/insideRobb/ttc-improver/delete/master/ttc-improver.js" class="inline-form" data-form-nonce="2a774a1ab8e3a4c2e74ad1b052fff2d83699e111" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="js0FoEOhrO1iWliMMgWLE87RZe1i/HZgRIrKvzzmfLKeJsVhdHo719KcvpW9xUpExrBfcr1uNAv+SmigTpB+fA==" /></div>
          <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Delete this file" data-disable-with>
            <span class="octicon octicon-trashcan"></span>
          </button>
</form>  </div>

  <div class="file-info">
      572 lines (542 sloc)
      <span class="file-info-divider"></span>
    47.6 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// ==UserScript==</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// @name TTC Improver</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// @namespace https://translate.twitter.com/</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// @version 1.4.8</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// @author @insideRobb</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// @description Improve your UX on Twitter Translation Center</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// @website http://robb.be/download/</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// @downloadURL http://robb.be/ttc/improver.user.js</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// @updateURL http://robb.be/ttc/improver.meta.js</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// @supportURL http://robb.be/download/?forum=report-bug</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// @include https://translate.twitter.com/*</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// @released 2014-05-21</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// @updated 2015-10-23</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// @copyright 2015+,insideRobb</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// @grant none</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// ==/UserScript==</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">TranslateTwitterAdapt</span>() {</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">    jqttci <span class="pl-k">=</span> jQuery.noConflict(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">cache</span>(<span class="pl-smi">page</span>) {</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> hours <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getHours</span>();</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (hours <span class="pl-k">&lt;</span> <span class="pl-c1">10</span>) {</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">            hours <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> hours;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> mins <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getMinutes</span>();</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (mins <span class="pl-k">&lt;</span> <span class="pl-c1">10</span>) {</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">            mins <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> mins;</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> currenttime <span class="pl-k">=</span> hours <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> mins;</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (sessionStorage.getItem(<span class="pl-s"><span class="pl-pds">&#39;</span>time<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> page) <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">            sessionStorage.setItem(<span class="pl-s"><span class="pl-pds">&#39;</span>time<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> page, currenttime);</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> cachable <span class="pl-k">=</span> currenttime <span class="pl-k">-</span> sessionStorage.getItem(<span class="pl-s"><span class="pl-pds">&#39;</span>time<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> page);</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ((cachable <span class="pl-k">&gt;=</span> <span class="pl-c1">30</span>) <span class="pl-k">||</span> (cachable <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> sessionStorage.getItem(<span class="pl-s"><span class="pl-pds">&#39;</span>cache<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> page) <span class="pl-k">===</span> <span class="pl-c1">null</span>)) {sessionStorage.setItem(<span class="pl-s"><span class="pl-pds">&#39;</span>time<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> page, currenttime); <span class="pl-k">return</span> <span class="pl-c1">false</span>;}</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> {<span class="pl-k">return</span> <span class="pl-c1">true</span>;}</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">ttciinterval</span>(<span class="pl-smi">selector</span>) {</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> interval <span class="pl-k">=</span> <span class="pl-c1">setInterval</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#translations .table tbody tr:nth-child(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> selector <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">clearInterval</span>(interval);</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> ttcistringtranslation <span class="pl-k">=</span> <span class="pl-c1">document</span>.querySelectorAll(<span class="pl-s"><span class="pl-pds">&quot;</span>.translation p<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> ttcistringtranslation.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>(((ttcistringtranslation[i].innerHTML.<span class="pl-c1">slice</span>(<span class="pl-k">-</span><span class="pl-c1">2</span>) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>..<span class="pl-pds">&quot;</span></span>)<span class="pl-k">||</span>(ttcistringtranslation[i].innerHTML.<span class="pl-c1">substr</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>✍<span class="pl-pds">&quot;</span></span>)<span class="pl-k">||</span>(ttcistringtranslation[i].innerHTML.<span class="pl-c1">substr</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>1160<span class="pl-pds">&quot;</span></span>)<span class="pl-k">||</span>(ttcistringtranslation[i].innerHTML.<span class="pl-c1">substr</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>115f<span class="pl-pds">&quot;</span></span>)<span class="pl-k">||</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(ttcistringtranslation[i].innerHTML)))<span class="pl-k">&amp;&amp;</span>(ttcistringtranslation[i].innerHTML.<span class="pl-c1">slice</span>(<span class="pl-k">-</span><span class="pl-c1">3</span>) <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>...<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">                        ttcistringtranslation[i].innerHTML<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&quot;</span> &lt;b style=&#39;color: red&#39;&gt;Unnecessary symbol&lt;/b&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">        }, <span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">forumdashboard</span>(<span class="pl-smi">tag</span>) {</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> value;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(tag <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> tag <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>**<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">            value <span class="pl-k">=</span> <span class="pl-c1">prompt</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Please enter text<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(value <span class="pl-k">!==</span> <span class="pl-c1">null</span>) {jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>textarea.text<span class="pl-pds">&quot;</span></span>).val(jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>textarea.text<span class="pl-pds">&quot;</span></span>).val() <span class="pl-k">+</span> tag <span class="pl-k">+</span> value <span class="pl-k">+</span> tag <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span>(tag <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>* <span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">            value <span class="pl-k">=</span> <span class="pl-c1">prompt</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Please enter text for unordered list item and then press ENTER<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(value <span class="pl-k">!==</span> <span class="pl-c1">null</span>) {jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>textarea.text<span class="pl-pds">&quot;</span></span>).val(jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>textarea.text<span class="pl-pds">&quot;</span></span>).val() <span class="pl-k">+</span> tag <span class="pl-k">+</span> value);}</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span>(tag <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>link<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">            value <span class="pl-k">=</span> <span class="pl-c1">prompt</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Please enter text for link<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> link <span class="pl-k">=</span> <span class="pl-c1">prompt</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Please enter URL<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>http://<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(value <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> link <span class="pl-k">!==</span> <span class="pl-c1">null</span>) {jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>textarea.text<span class="pl-pds">&quot;</span></span>).val(jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>textarea.text<span class="pl-pds">&quot;</span></span>).val() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> value <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> link <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>) <span class="pl-pds">&quot;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span>(tag <span class="pl-k">!==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">            value <span class="pl-k">=</span> <span class="pl-c1">prompt</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Please enter text for header and press ENTER<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(value <span class="pl-k">!==</span> <span class="pl-c1">null</span>) {jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>textarea.text<span class="pl-pds">&quot;</span></span>).val(jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>textarea.text<span class="pl-pds">&quot;</span></span>).val() <span class="pl-k">+</span> tag <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> value);}</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">ttciicount</span>(<span class="pl-smi">ttcicountsource</span>, <span class="pl-smi">ttcicountnum</span>, <span class="pl-smi">ttcicountstorage</span>) {</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">        jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>#improverdata<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">load</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/user/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> getusername <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ttcicountsource <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> .container .profile-activity ul<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> improvervalue <span class="pl-k">=</span> (<span class="pl-c1">parseInt</span>(jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>#improverdata ul:last-child li:nth-last-child(2) a<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">text</span>())) <span class="pl-k">*</span> <span class="pl-c1">20</span>;</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">isNaN</span>(improvervalue)) {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">                improvervalue <span class="pl-k">=</span> <span class="pl-c1">document</span>.querySelectorAll(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata .translation-timeline li<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">            jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.stats a:nth-of-type(<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ttcicountnum <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>) .stat-value<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">text</span>(improvervalue);</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">            sessionStorage.setItem(ttcicountstorage <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> getusername, improvervalue);</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">lastprofileac</span>(<span class="pl-smi">username</span>, <span class="pl-smi">where</span>) {</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">        jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>#improverdata<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">load</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/user/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> username <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> .container<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> mod <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">                name<span class="pl-k">:</span> jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata .profile-image<span class="pl-pds">&quot;</span></span>).attr(<span class="pl-s"><span class="pl-pds">&#39;</span>alt<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">                avatar<span class="pl-k">:</span> jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata .profile-image<span class="pl-pds">&quot;</span></span>).attr(<span class="pl-s"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">                date<span class="pl-k">:</span> jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata .translation-timeline .translation-timeline-item:first-child .translation-timeline-item-meta<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">text</span>(),</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">                status<span class="pl-k">:</span> jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata .translation-timeline .translation-timeline-item:first-child .string-meta span:first-child<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>].outerHTML,</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">                link<span class="pl-k">:</span> jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata .translation-timeline .translation-timeline-item:first-child &gt; a:last-of-type<span class="pl-pds">&quot;</span></span>).attr(<span class="pl-s"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">                content<span class="pl-k">:</span> jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata .translation-timeline .translation-timeline-item:first-child .translation-timeline-item-translation<span class="pl-pds">&quot;</span></span>).html()</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">            jqttci(where).append(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;dashboard-center-list-item table-row&quot;&gt;&lt;a href=&quot;/user/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> username <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;div class=&quot;dashboard-center-item-avatar table-cell&quot;&gt;&lt;img alt=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> mod.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot; class=&quot;pull-left img-rounded&quot; src=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> mod.avatar <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot; style=&quot;width: 35px; height: 35px; max-width: 35px&quot;&gt;&lt;/div&gt;&lt;/a&gt;&lt;div class=&quot;dashboard-list-item-left adjacent-to-avatar table-cell&quot; style=&quot;width: 73%;&quot;&gt;&lt;div class=&quot;dashboard-user-info clearfix&quot;&gt;&lt;a href=&quot;/user/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> username <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;div class=&quot;black pull-left clearfix&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> mod.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;&lt;/a&gt;&lt;a href=&quot;https://twitter.com/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> username <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;div class=&quot;gray-light pull-left elbow-room clearfix&quot;&gt;@<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> username <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;&lt;/a&gt;&lt;/div&gt;&lt;div class=&quot;dashboard-activity-info clearfix&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> mod.<span class="pl-c1">status</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;a href=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> mod.<span class="pl-c1">link</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;h4 class=&quot;translation-timeline-item-translation&quot; style=&quot;display: inline&quot;&gt; <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> mod.<span class="pl-c1">content</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/h4&gt;&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;dashboard-list-item-right table-cell text-right gray-medium&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> mod.date <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">            jqttci(where <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> .spinner-loader<span class="pl-pds">&quot;</span></span>).remove();</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">buildmodsdash</span>() {</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> modsscreenname <span class="pl-k">=</span> <span class="pl-c1">document</span>.querySelectorAll(<span class="pl-s"><span class="pl-pds">&#39;</span>.dashboard-moderator .dashboard-moderator-username<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> modsscreenname.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> modsusername <span class="pl-k">=</span> modsscreenname[i].textContent.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>@<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">            lastprofileac(modsusername, <span class="pl-s"><span class="pl-pds">&quot;</span>.moderatorsdash<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">buildforumdash</span>() {</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> ttcimproverdates <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">        jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>#improverdata<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">load</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/forum/forums/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ttcilanguage <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> .topics .topic &gt; td[class*=&quot;e&quot;]<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> ttciforumdates <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">                ints<span class="pl-k">:</span> <span class="pl-c1">document</span>.querySelectorAll(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata .latest-post a<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">                titles<span class="pl-k">:</span> <span class="pl-c1">document</span>.querySelectorAll(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata .subject a<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> ttciforumdates.ints.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> ttciforumdatesmeta <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">                    num<span class="pl-k">:</span> ttciforumdates.ints[i].textContent.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>], <span class="pl-c">// number eg 1</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">                    time<span class="pl-k">:</span> ttciforumdates.ints[i].textContent.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">1</span>], <span class="pl-c">// unit eg minute</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">                    ago<span class="pl-k">:</span> ttciforumdates.ints[i].textContent.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">2</span>], <span class="pl-c">// for almost, over and about</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">                    nick<span class="pl-k">:</span> ttciforumdates.ints[i].textContent.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">5</span>], <span class="pl-c">// insideRobb</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">                    link<span class="pl-k">:</span> ttciforumdates.ints[i].<span class="pl-c1">href</span>, <span class="pl-c">// https</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">                    title<span class="pl-k">:</span> ttciforumdates.titles[i].textContent, <span class="pl-c">// Introduce yourself</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">                    date<span class="pl-k">:</span> {}</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">//conversion in minutes</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(ttciforumdatesmeta.time <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>month<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> ttciforumdatesmeta.time <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>months<span class="pl-pds">&quot;</span></span>) {ttciforumdatesmeta.date <span class="pl-k">=</span> ttciforumdatesmeta.num <span class="pl-k">*</span> <span class="pl-c1">43200</span>;}</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span> <span class="pl-k">if</span>(ttciforumdatesmeta.time <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>day<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> ttciforumdatesmeta.time <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>days<span class="pl-pds">&quot;</span></span>) {ttciforumdatesmeta.date <span class="pl-k">=</span> ttciforumdatesmeta.num <span class="pl-k">*</span> <span class="pl-c1">1440</span>;}</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span> <span class="pl-k">if</span> (ttciforumdatesmeta.time <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>hour<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> ttciforumdatesmeta.time <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>hours<span class="pl-pds">&quot;</span></span>) {ttciforumdatesmeta.date <span class="pl-k">=</span> ttciforumdatesmeta.num <span class="pl-k">*</span> <span class="pl-c1">60</span>;}</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span> <span class="pl-k">if</span> ((ttciforumdatesmeta.num <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>about<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&amp;&amp;</span> (ttciforumdatesmeta.ago <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>hour<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> ttciforumdatesmeta.ago <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>hours<span class="pl-pds">&quot;</span></span>)) {ttciforumdatesmeta.date <span class="pl-k">=</span> ttciforumdatesmeta.time <span class="pl-k">*</span> <span class="pl-c1">60</span>; ttciforumdatesmeta.nick <span class="pl-k">=</span> ttciforumdates.ints[i].textContent.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">6</span>]; ttciforumdatesmeta.time <span class="pl-k">=</span> ttciforumdatesmeta.time <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> ttciforumdatesmeta.ago;}</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span> <span class="pl-k">if</span> (ttciforumdatesmeta.time <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>minute<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> ttciforumdatesmeta.time <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>minutes<span class="pl-pds">&quot;</span></span>) {ttciforumdatesmeta.date <span class="pl-k">=</span> ttciforumdatesmeta.num;}</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span> <span class="pl-k">if</span> (ttciforumdatesmeta.time <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>than<span class="pl-pds">&quot;</span></span>) {ttciforumdatesmeta.date <span class="pl-k">=</span> <span class="pl-c1">1</span>; ttciforumdatesmeta.nick <span class="pl-k">=</span> ttciforumdates.ints[i].textContent.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">7</span>]; ttciforumdatesmeta.time <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>than 1 minute<span class="pl-pds">&quot;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span> <span class="pl-k">if</span>(ttciforumdatesmeta.num <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>about<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> ttciforumdatesmeta.ago <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>month<span class="pl-pds">&quot;</span></span>) {ttciforumdatesmeta.date <span class="pl-k">=</span> <span class="pl-c1">43200</span>; ttciforumdatesmeta.nick <span class="pl-k">=</span> ttciforumdates.ints[i].textContent.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">6</span>]; ttciforumdatesmeta.time <span class="pl-k">=</span> ttciforumdatesmeta.time <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> ttciforumdatesmeta.ago;}</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span> {ttciforumdatesmeta.date <span class="pl-k">=</span> <span class="pl-c1">2000000000000</span>; ttciforumdatesmeta.time <span class="pl-k">=</span> ttciforumdatesmeta.time <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ttciforumdatesmeta.ago;} <span class="pl-c">// valid for months and years - over, about, almost</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">                ttcimproverdates[i]<span class="pl-k">=</span>{ago<span class="pl-k">:</span>ttciforumdatesmeta.date, num<span class="pl-k">:</span>ttciforumdatesmeta.num, unit<span class="pl-k">:</span>ttciforumdatesmeta.time, link<span class="pl-k">:</span>ttciforumdatesmeta.<span class="pl-c1">link</span>, nick<span class="pl-k">:</span>ttciforumdatesmeta.nick, title<span class="pl-k">:</span>ttciforumdatesmeta.<span class="pl-c1">title</span>};</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">            ttcimproverdates.<span class="pl-c1">sort</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>){</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> a.ago<span class="pl-k">-</span>b.ago;</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">3</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(i <span class="pl-k">==</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">                    jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.forumdash .spinner-loader<span class="pl-pds">&quot;</span></span>).remove();</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.forumdash<span class="pl-pds">&quot;</span></span>).append(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;dashboard-center-list-item table-row clearfix&quot;&gt;&lt;div class=&quot;dashboard-list-item-left adjacent-to-icon table-cell&quot; style=&quot;width: 84.5%&quot;&gt;&lt;div class=&quot;dashboard-priority dashboard-priority-description clearfix&quot;&gt;&lt;a href=&quot;/user/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ttcimproverdates[i].nick <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;div class=&quot;black&quot; style=&quot;display: inline&quot;&gt;@<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ttcimproverdates[i].nick <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;&lt;/a&gt; &lt;div class=&quot;gray-light&quot; style=&quot;display: inline&quot;&gt;replied&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;dashboard-manager-user-info clearfix&quot;&gt;&lt;div class=&quot;clearfix&quot;&gt;&lt;div class=&quot;dashboard-user-name clearfix&quot;&gt;to &lt;a href=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ttcimproverdates[i].<span class="pl-c1">link</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ttcimproverdates[i].<span class="pl-c1">title</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;dashboard-list-item-right table-cell text-right&quot; style=&quot;width: 20%&gt;&lt;div class=&quot;gray-medium clearfix&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ttcimproverdates[i].num <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ttcimproverdates[i].unit <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> ago&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">buildfavsdash</span>() {</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (localStorage.getItem(<span class="pl-s"><span class="pl-pds">&quot;</span>ttcifavorites<span class="pl-pds">&quot;</span></span>) <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> toptranslators;</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Afrikaans<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>GalauBang3t<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>haserkopf<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Albanian<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>bujartafili<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>genc_ks<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Arabic<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>MustafaFaour<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Basque<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>supro<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Ieribi<span class="pl-pds">&quot;</span></span>];}               </td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Belarusian<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Juschtell<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>00ZE<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Bengali<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>UdiptoRoy<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>gargi_hazra<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Bulgarian<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>peter_sl<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Catalan<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>no_hi_soc_tot<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Croatian<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Peter_Dinu_<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>danasamaloglup<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Czech<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>verzus<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>themarketka<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Danish<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>helleras<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Dutch<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>LeonWetzel<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>english-uk<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Farhan_Danish<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>conradoldcorn<span class="pl-pds">&quot;</span></span>];}  </td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Esperanto<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>danieldaruma<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Farsi<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Hassanvand<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Kavelicious<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Filipino<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>micahsantos<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Finnish<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>LJuutilainen<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>French<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Orliox<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Galician<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>markooss<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>German<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>das_ailton<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Greek<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Lostologos<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Hebrew<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Wallflower_r<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Hindi<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Navrooz<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>alolita<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Hungarian<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>kkemenczy<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Indonesian<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>myifn<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Italian<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>insideRobb<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>laupezza<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Japanese<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>richardx64<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>haru703<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Kannada<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Manjunatha_MN<span class="pl-pds">&quot;</span></span>];} <span class="pl-c">// 1 missing</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Korean<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>sapphire_dev<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>nrjeon<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>kurdish-central<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>jwtiyar<span class="pl-pds">&quot;</span></span>];} <span class="pl-c">// 1 missing</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>kurdish-northern<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>mryildiz7272<span class="pl-pds">&quot;</span></span>];} <span class="pl-c">// 1 missing</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Latin<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>LatinTranslate_<span class="pl-pds">&quot;</span></span>];} <span class="pl-c">// 1 missing</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Latvian<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>knifeless333<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>edzuslv<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Malay<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>aztazhr<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Norwegian<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>RockThatClock<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Polish<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>sylwiabesz<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>portuguese-brazil<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>sukigu_<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>OlaKiridinha<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Romanian<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>TheGelu<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>oviung<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Russian<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>AlexAdvert<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>sprigoda<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Serbian<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>acko_aa<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>simplified-chinese<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>ifansonia<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>sunnyjiangsj<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Slovak<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>matiqos<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Spanish<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>mathiascupito<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>monica<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Swedish<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>nedemekpembe<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Tamil<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>vijayasankar91<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>hari_vel<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Thai<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>nutmos<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>traditional-chinese<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>ashaneba<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>candacec<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Turkish<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>aonurpkr<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>unbirthdaytea<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Ukrainian<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>SergiyAquila<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>MiraVognyu<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Urdu<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>FarhanDanish<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Vietnamese<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Dikhotheta<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Manoki_Lin<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Welsh<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>DewiEirig<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>aledpowell<span class="pl-pds">&quot;</span></span>];}</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Yoruba<span class="pl-pds">&quot;</span></span>) {toptranslators <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>SamOlusegun<span class="pl-pds">&quot;</span></span>];} <span class="pl-c">// 1 missing</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> {toptranslators <span class="pl-k">=</span> <span class="pl-c1">false</span>;} <span class="pl-c">// Burmese2, Irish1</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(((ttcilanguage <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Burmese<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> (ttcilanguage <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Irish<span class="pl-pds">&quot;</span></span>))<span class="pl-k">&amp;&amp;</span> (localStorage.getItem(<span class="pl-s"><span class="pl-pds">&quot;</span>ttcifavorites<span class="pl-pds">&quot;</span></span>) <span class="pl-k">==</span> <span class="pl-c1">null</span>)) {</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">            localStorage.setItem(<span class="pl-s"><span class="pl-pds">&#39;</span>ttcifavorites<span class="pl-pds">&#39;</span></span>, toptranslators);</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(localStorage.getItem(<span class="pl-s"><span class="pl-pds">&quot;</span>ttcifavorites<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">            toptranslators <span class="pl-k">=</span> localStorage.getItem(<span class="pl-s"><span class="pl-pds">&quot;</span>ttcifavorites<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(toptranslators <span class="pl-k">!==</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> toptranslators.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(toptranslators[i] <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">                    lastprofileac(toptranslators[i], <span class="pl-s"><span class="pl-pds">&quot;</span>.favoritesdash<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">            jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.favoritesdash<span class="pl-pds">&quot;</span></span>).append(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;dashboard-center-list-item table-row&quot;&gt;&lt;div class=&quot;dashboard-list-item-left adjacent-to-avatar table-cell&quot; style=&quot;width: 100%&quot;&gt;&lt;div class=&quot;dashboard-user-info clearfix&quot;&gt;Hey, what about tell us some top translators<span class="pl-cce">\&#39;</span> username?&lt;/div&gt;&lt;div class=&quot;dashboard-activity-info clearfix&quot;&gt;&lt;a href=&quot;https://twitter.com/intent/tweet?screen_name=insideRobb&amp;amp;text=I%20would%20suggest%20%40username1%20%26%20%40username2%20for%20TTC%20Improver&quot; class=&quot;twitter-mention-button&quot; data-size=&quot;large&quot; data-related=&quot;insideRobb,TTC_Feed&quot;&gt;Tweet to @insideRobb&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;dashboard-list-item-right table-cell text-right gray-medium&quot;&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">booleanize</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> (value <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>false<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> value <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> value <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> value <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>null<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> value <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>0<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">flex_encode</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">st</span>) {</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> st.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">.</span><span class="pl-pds">/</span>g</span>, <span class="pl-k">function</span> (<span class="pl-smi">s</span>) {</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> s.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// Disable TTC Improver</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> currentusername <span class="pl-k">=</span> jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.user-data<span class="pl-pds">&#39;</span></span>).attr(<span class="pl-s"><span class="pl-pds">&#39;</span>data-user-login<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> ttcimproverdisabled <span class="pl-k">=</span> localStorage.getItem(<span class="pl-s"><span class="pl-pds">&quot;</span>disablettcimprover<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\/</span>user<span class="pl-cce">\/</span><span class="pl-pds">/</span></span> <span class="pl-k">+</span> currentusername <span class="pl-k">+</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\/</span>settings<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(location.<span class="pl-c1">pathname</span>)) {</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> ttcichecked;</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (ttcimproverdisabled <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>true<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">            ttcichecked <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span> checked<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">            ttcichecked <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">        jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.edit_user<span class="pl-pds">&#39;</span></span>).before(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;fieldset class=&quot;control-group&quot;&gt;&lt;h3 class=&quot;settings-header&quot; style=&quot;display: inline-block&quot;&gt;TTC Improver&lt;/h3&gt;&lt;/fieldset&gt;&lt;fieldset class=&quot;control-group&quot;&gt;&lt;div class=&quot;controls&quot;&gt;&lt;div class=&quot;control-list&quot;&gt;&lt;label class=&quot;checkbox&quot;&gt;&lt;input id=&quot;improver_disabled&quot; type=&quot;checkbox&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ttcichecked <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&gt;Deactivate&lt;/label&gt;&lt;label class=&quot;control-label&quot; style=&quot;font-weight: normal&quot;&gt;Developed by &lt;a href=&quot;https://twitter.com/insideRobb&quot; class=&quot;alert-link&quot;&gt;@insideRobb&lt;/a&gt;; projects icons by &lt;a href=&quot;https://twitter.com/davideroliti&quot; class=&quot;alert-link&quot;&gt;@davideroliti&lt;/a&gt;&lt;br&gt;&lt;a href=&quot;http://robb.be/download/?forum=report-bug&quot;&gt;Report bug&lt;/a&gt; or &lt;a href=&quot;http://robb.be/download/?forum=suggest-idea&quot;&gt;send feedbacks&lt;/a&gt; - &lt;a href=&quot;http://robb.be/download/?page_id=14&quot;&gt;Changelog&lt;/a&gt;&lt;/label&gt;&lt;/div&gt;&lt;/div&gt;&lt;/fieldset&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">        jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>#improver_disabled<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (jqttci(<span class="pl-v">this</span>).is(<span class="pl-s"><span class="pl-pds">&#39;</span>:checked<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">                localStorage.setItem(<span class="pl-s"><span class="pl-pds">&quot;</span>disablettcimprover<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">                localStorage.removeItem(<span class="pl-s"><span class="pl-pds">&quot;</span>disablettcimprover<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(ttcimproverdisabled <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>true<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">        jqttci(&quot;body&quot;).append(&quot;&lt;div id=&#39;improverdata&#39; style=&#39;display: none&#39;&gt;&lt;/div&gt;&lt;style&gt;@-moz-keyframes spinner-loader{0%{-moz-transform:rotate(0);transform:rotate(0)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-loader{0%{-moz-transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);transform:rotate(0)}100%{-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-loader:not(:required){-moz-animation:spinner-loader 1500ms infinite linear;-webkit-animation:spinner-loader 1500ms infinite linear;animation:spinner-loader 1500ms infinite linear;-moz-border-radius:.5em;-webkit-border-radius:.5em;border-radius:.5em;-moz-box-shadow:rgba(0,0,51,.3)1.5em 0 0 0,rgba(0,0,51,.3)1.1em 1.1em 0 0,rgba(0,0,51,.3)0 1.5em 0 0,rgba(0,0,51,.3)-1.1em 1.1em 0 0,rgba(0,0,51,.3)-1.5em 0 0 0,rgba(0,0,51,.3)-1.1em -1.1em 0 0,rgba(0,0,51,.3)0 -1.5em 0 0,rgba(0,0,51,.3)1.1em -1.1em 0 0;-webkit-box-shadow:rgba(0,0,51,.3)1.5em 0 0 0,rgba(0,0,51,.3)1.1em 1.1em 0 0,rgba(0,0,51,.3)0 1.5em 0 0,rgba(0,0,51,.3)-1.1em 1.1em 0 0,rgba(0,0,51,.3)-1.5em 0 0 0,rgba(0,0,51,.3)-1.1em -1.1em 0 0,rgba(0,0,51,.3)0 -1.5em 0 0,rgba(0,0,51,.3)1.1em -1.1em 0 0;box-shadow:rgba(0,0,51,.3)1.5em 0 0 0,rgba(0,0,51,.3)1.1em 1.1em 0 0,rgba(0,0,51,.3)0 1.5em 0 0,rgba(0,0,51,.3)-1.1em 1.1em 0 0,rgba(0,0,51,.3)-1.5em 0 0 0,rgba(0,0,51,.3)-1.1em -1.1em 0 0,rgba(0,0,51,.3)0 -1.5em 0 0,rgba(0,0,51,.3)1.1em -1.1em 0 0;display:inline-block;font-size:10px;width:1em;height:1em;margin:1.5em;overflow:hidden;text-indent:100%;margin-right: auto; font-size: 6px; display: block; margin-left: auto; position: relative; top: -6px;}&lt;/style&gt;&quot;);</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> i;  </td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">//Detect if user is a moderator, vendor or admin</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> ttcstaff <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.navbar-right a[href=&#39;/admin&#39;]<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">            ttcstaff <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">//Warning for unnecessary symbols at the end</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#search-form<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">==</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ((<span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">href</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>https://translate.twitter.com/phrases/<span class="pl-pds">&quot;</span></span>) <span class="pl-k">!=</span> <span class="pl-k">-</span><span class="pl-c1">1</span>)<span class="pl-k">||</span>(jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#search-form<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">==</span> <span class="pl-c1">1</span>)) {</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#q<span class="pl-pds">&quot;</span></span>).addClass(<span class="pl-s"><span class="pl-pds">&quot;</span>form-control<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#q<span class="pl-pds">&quot;</span></span>).css(<span class="pl-s"><span class="pl-pds">&quot;</span>margin-top<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>7px<span class="pl-pds">&quot;</span></span>).css(<span class="pl-s"><span class="pl-pds">&quot;</span>width<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>90%<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#phrase-search-submit<span class="pl-pds">&quot;</span></span>).css(<span class="pl-s"><span class="pl-pds">&quot;</span>height<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>30px<span class="pl-pds">&quot;</span></span>).css(<span class="pl-s"><span class="pl-pds">&quot;</span>padding-top<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>4px<span class="pl-pds">&quot;</span></span>).css(<span class="pl-s"><span class="pl-pds">&quot;</span>margin-top<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>0px<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">                jqttci(&quot;#search-form .input-group&quot;).prepend(&#39;&lt;div class=&quot;modal fade&quot; id=&quot;searchOperators&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;myModalLabel&quot;&gt;&lt;div class=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;&lt;div class=&quot;modal-content&quot;&gt;&lt;div class=&quot;modal-header&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;close&quot; data-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;span aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/span&gt;&lt;/button&gt;&lt;h4 class=&quot;modal-title&quot; id=&quot;myModalLabel&quot;&gt;Search Operators&lt;/h4&gt;&lt;/div&gt;&lt;div class=&quot;modal-body&quot; style=&quot;font-size: 14px; color: #555&quot;&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;intranslation: &lt;/b&gt;Search for terms in translations instead of source content&lt;/li&gt;&lt;li&gt;&lt;b&gt;tag: &lt;/b&gt;Search for phrases tagged with the specified tag&lt;/li&gt;&lt;li&gt;&lt;b&gt;notag: &lt;/b&gt;Search for phrases tagged without any tag&lt;/li&gt;&lt;li&gt;&lt;b&gt;url: &lt;/b&gt;Search for phrases that have a URL that contains the term specified&lt;/li&gt;&lt;li&gt;&lt;b&gt;nourl: &lt;/b&gt;Search for phrases without any URL&lt;/li&gt;&lt;li&gt;&lt;b&gt;comment: &lt;/b&gt;Search for phrases that have a note that contains the term specified&lt;/li&gt;&lt;li&gt;&lt;b&gt;nocomment: &lt;/b&gt;Search for phrases without any note&lt;/li&gt;&lt;li&gt;&lt;b&gt;meta_key: &lt;/b&gt;Search for phrases by meta key&lt;/li&gt;&lt;li&gt;&lt;b&gt;global: &lt;/b&gt;Search across all projects&lt;/li&gt;&lt;li&gt;&lt;b&gt;verbatim: &lt;/b&gt;Search for exact matches&lt;/li&gt;&lt;/ul&gt;&lt;a href=&quot;/forum/forums/useful-guidelines/topics/7675&quot;&gt;Learn more&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;button type=&quot;button&quot; class=&quot;btn btn-sm btn-info&quot; data-toggle=&quot;modal&quot; data-target=&quot;#searchOperators&quot; style=&quot;margin-right: 5px&quot;&gt;&lt;i class=&quot;glyphicon glyphicon-info-sign&quot;&gt;&lt;/i&gt;&lt;/button&gt;&lt;div style=&quot;margin-right: 5px&quot; class=&quot;btn-group&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;btn btn-default btn-sm dropdown-toggle&quot; data-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;Operators &lt;span class=&quot;caret&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;ul class=&quot;dropdown-menu&quot;&gt;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;intranslation:&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;tag:&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;notag:&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;url:&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;nourl:&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;comment:&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;nocoment:&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;meta_key:&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;global:&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;verbatim:&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;global:verbatim:&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&#39;);</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#search-form ul a<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">                    jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#q<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">focus</span>().val(jqttci(<span class="pl-v">this</span>).<span class="pl-c1">text</span>());</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.full-height .alert-info<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">!=</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">                    ttciinterval(<span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> target <span class="pl-k">=</span> jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#translations .translations-table &gt; tbody<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> observer <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">MutationObserver</span>(<span class="pl-k">function</span>( <span class="pl-smi">mutations</span> ) {</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">                        ttciinterval(<span class="pl-s"><span class="pl-pds">&#39;</span>6<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">                    });</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> obconfig <span class="pl-k">=</span> {childList<span class="pl-k">:</span> <span class="pl-c1">true</span>};</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">                    observer.observe(target, obconfig);</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">                    jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>ul#phrases<span class="pl-pds">&quot;</span></span>).on(<span class="pl-s"><span class="pl-pds">&quot;</span>click<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>li<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">                        ttciinterval(<span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">                    });</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">//Forum buttons</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#new_topic<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span><span class="pl-k">||</span>jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#new_post<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span><span class="pl-k">||</span>jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.edit_post<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">            jqttci(&quot;textarea.text&quot;).before(&#39;&lt;style&gt;.body-forem-posts .container &gt; h2, .body-forem-posts .topic_subject {display: inline-block} .body-forem-posts .topic_subject:before {content: open-quote} .body-forem-posts .topic_subject:after {content: close-quote}&lt;/style&gt;&lt;div class=&quot;btn-group formatter&quot; role=&quot;group&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;btn btn-default&quot; style=&quot;font-style: italic&quot;&gt;i&lt;/a&gt;&lt;a class=&quot;btn btn-default&quot; style=&quot;font-weight: bold&quot;&gt;b&lt;/a&gt;&lt;a class=&quot;btn btn-default&quot;&gt;Link&lt;/a&gt;&lt;a class=&quot;btn btn-default&quot;&gt;List item&lt;/a&gt;&lt;div class=&quot;btn-group&quot; role=&quot;group&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;btn btn-default dropdown-toggle&quot; data-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;Header&lt;span class=&quot;caret&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;ul class=&quot;dropdown-menu&quot;&gt;&lt;li&gt;&lt;a href=&quot;#&quot; title=&quot;#&quot;&gt;H1&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot; title=&quot;##&quot;&gt;H2&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot; title=&quot;###&quot;&gt;H3&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot; title=&quot;####&quot;&gt;H4&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot; title=&quot;#####&quot;&gt;H5&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot; title=&quot;######&quot;&gt;H6&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;/div&gt;&lt;br&gt;&lt;br&gt;&#39;);      </td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">            jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.formatter &gt; a:first-child<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">                forumdashboard(<span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">            jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.formatter &gt; a:nth-child(2)<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">                forumdashboard(<span class="pl-s"><span class="pl-pds">&quot;</span>**<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">            jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.formatter &gt; a:nth-child(3)<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">                forumdashboard(<span class="pl-s"><span class="pl-pds">&quot;</span>link<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">            jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.formatter &gt; a:nth-child(4)<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">                forumdashboard(<span class="pl-s"><span class="pl-pds">&quot;</span>* <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">            jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.formatter .dropdown-menu a<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">                forumdashboard(<span class="pl-v">this</span>.<span class="pl-c1">title</span>);</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">//Icons</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>((jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.clearfix .pull-right a[href=&#39;/translate&#39;]<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>)<span class="pl-k">||</span>(<span class="pl-c1">document</span>.<span class="pl-c1">URL</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>https://translate.twitter.com/translate<span class="pl-pds">&quot;</span></span>)) {   </td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> icons <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>about-twitter<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG1a6LCIAA5Cb-.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>amplify-player<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BqphXRdIgAEptHd.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>cards<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG0lHfCIAAqIRG.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>emails<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG0lHTCEAEzcRl.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>microsites<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG0lHgCAAAT9hr.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>m2<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/B_qaW0GXAAAKgCM.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>responsive-web<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG0yF1CIAA9DjY.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>sms<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG0yHtCUAAOEUE.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>periscope-android<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/CH5NC8MUwAA7FqH.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>periscope-ios<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/CH5NC8OUcAA6r3T.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>periscope-web<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/CH5NC8QUkAAi31H.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>platform<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG0yIACUAA4IGU.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>support-twitter<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG1gQuCcAAku84.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>transparency-twitter<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/B_qbejqWYAADSIo.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>tweetdeck<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG1a5yCAAA9Kag.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>twitter-dev-android<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/B7JjGVqIEAAS5yD.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>twitter-dev-ios<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/B7pGLyVCQAA6Q50.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>twitter-dev-web<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/B_qbemAWcAAMmw8.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>android<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG1a6tCIAAv--A.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>twitter-iphone<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG1a6fCMAAWti3.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>twitter-mac<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/B_qaWz6WwAAWBNC.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>twitter-windowsphone<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG1gPRCQAAr0yP.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>twitter-mirror-ios<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG1lRNCEAAb30K.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>twitter-music<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG1lVLCIAAvPpq.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>twitter<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG1lWuCcAAeX0B.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>VineAPI<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG1lW_CMAAsyu3.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>vine-android<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG1si6CYAAd_mh.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>vine-ios<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG1ssCCEAAn-Jh.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>vine-windowsphone<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG1ssiCQAE9MZ8.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>glossary_project<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BvUJyqsCMAAer5k.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>twitter-ads<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoPW3gyIUAAxJ--.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>dev-twitter<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/B_qbemuWEAAZIk_.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>jobs<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BoG1gRaCQAAPzMo.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">            icons.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>glossary_project_test_onl<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BvUJyqsCMAAer5k.png<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">document</span>.<span class="pl-c1">URL</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>https://translate.twitter.com/translate<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>head<span class="pl-pds">&#39;</span></span>).append(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;style type=&quot;text/css&quot;&gt;.dashboard-center .table a img {background-image: none}&lt;/style&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">for</span>(i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> icons.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">                    jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.dashboard-center .table a[href=&quot;/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> icons[i][<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;] img<span class="pl-pds">&#39;</span></span>).prop(<span class="pl-s"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>, icons[i][<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">load</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/user/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> currentusername <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> .stats div.stat &gt; .stat-value<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> helldashdiv <span class="pl-k">=</span> <span class="pl-c1">document</span>.querySelectorAll(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-sidebar .dashboard-sidebar-divider<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">                    helldashdiv.insertAdjacentHTML(<span class="pl-s"><span class="pl-pds">&#39;</span>beforebegin<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;height10&quot;&gt;&lt;/div&gt;&lt;div class=&quot;clearfix&quot;&gt;&lt;strong class=&quot;stat-value&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">text</span>().<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/strong&gt;&lt;div class=&quot;stat-name text-muted&quot;&gt;KARMA POINTS&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>head<span class="pl-pds">&#39;</span></span>).append(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;style type=&quot;text/css&quot;&gt;#projectsDropdownMenu .pull-left img {background-image: none}&lt;/style&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">for</span>(i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> icons.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-c1">document</span>.<span class="pl-c1">URL</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>https://translate.twitter.com/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> icons[i][<span class="pl-c1">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">                        jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>#projectsDropdownMenu .pull-left img<span class="pl-pds">&#39;</span></span>).prop(<span class="pl-s"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>, icons[i][<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">                        i <span class="pl-k">=</span> icons.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">//Profiles</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ((<span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">href</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>https://translate.twitter.com/user/<span class="pl-pds">&quot;</span></span>) <span class="pl-k">!=</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) <span class="pl-k">&amp;&amp;</span> (jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.profile-name<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span>) <span class="pl-k">&amp;&amp;</span> (jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#oauth-connect<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>)) {</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">            jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.stats a[href$=&quot;votes_for&quot;] .stat-value<span class="pl-pds">&#39;</span></span>).html(jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.stats a[href$=&quot;votes_for&quot;] .stat-value<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">text</span>().<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">            jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.stats &gt; div .stat-value<span class="pl-pds">&#39;</span></span>).html(jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.stats &gt; div .stat-value<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">text</span>().<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> getusername <span class="pl-k">=</span> jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.profile-user<span class="pl-pds">&#39;</span></span>).attr(<span class="pl-s"><span class="pl-pds">&#39;</span>data-user-login<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">            jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.stats a:not(a[href$=&quot;/votes_for&quot;]) .stat-value<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">text</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Loading<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">            cache(getusername);</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (cache(getusername) <span class="pl-k">===</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">                ttciicount(<span class="pl-s"><span class="pl-pds">&quot;</span>translations<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>1<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>translations<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">                ttciicount(<span class="pl-s"><span class="pl-pds">&quot;</span>translations/approved<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>2<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>translations_approved<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">                ttciicount(<span class="pl-s"><span class="pl-pds">&quot;</span>votes<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>3<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>votes<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">                ttciicount(<span class="pl-s"><span class="pl-pds">&quot;</span>votes/approved<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>4<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>votes_approved<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">                sessionStorage.setItem(<span class="pl-s"><span class="pl-pds">&#39;</span>cache<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> getusername, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.stats a:nth-of-type(1) .stat-value<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">text</span>(sessionStorage.getItem(<span class="pl-s"><span class="pl-pds">&#39;</span>translations_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> getusername));</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.stats a:nth-of-type(2) .stat-value<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">text</span>(sessionStorage.getItem(<span class="pl-s"><span class="pl-pds">&#39;</span>translations_approved_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> getusername));</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.stats a:nth-of-type(3) .stat-value<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">text</span>(sessionStorage.getItem(<span class="pl-s"><span class="pl-pds">&#39;</span>votes_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> getusername));</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.stats a:nth-of-type(4) .stat-value<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">text</span>(sessionStorage.getItem(<span class="pl-s"><span class="pl-pds">&#39;</span>votes_approved_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> getusername));</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ((jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.user-achievements<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">==</span> <span class="pl-c1">0</span>) <span class="pl-k">&amp;&amp;</span> (jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.profile-name<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span>)) {</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.stats<span class="pl-pds">&quot;</span></span>).after(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;user-achievements&quot;&gt;&lt;div class=&quot;clearfix&quot;&gt;&lt;h2 class=&quot;pull-left&quot;&gt;Achievements&lt;/h2&gt;&lt;/div&gt;&lt;div class=&quot;clearfix achievement-group translator-level&quot;&gt;&lt;p class=&quot;muted achievement-group-name&quot;&gt;Translator Level&lt;/p&gt;&lt;div class=&quot;achievement clearfix&quot;&gt;&lt;img alt=&quot;achievements_soaring_large&quot; class=&quot;pull-left achievement-image achievements_soaring_large&quot; src=&quot;&quot;&gt;&lt;div class=&quot;achievement-info clearfix pull-left&quot;&gt;&lt;div class=&quot;clearfix&quot;&gt;&lt;span class=&quot;achievement-name&quot;&gt;&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;achievement-description muted clearfix&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> levelbadge <span class="pl-k">=</span> jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.translator-level .achievement &gt; img<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> levelname <span class="pl-k">=</span> jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.translator-level .achievement-name<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> leveldescription <span class="pl-k">=</span> jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.translator-level .achievement-description<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> approved <span class="pl-k">=</span> jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.stats a[href$=&quot;translations/approved&quot;] .stat-value<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">text</span>();</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span>LbTransOnly<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(getusername) <span class="pl-k">||</span><span class="pl-sr"> <span class="pl-pds">/</span>LB<span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(getusername) <span class="pl-k">||</span><span class="pl-sr"> <span class="pl-pds">/</span>QALiox<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(getusername) <span class="pl-k">||</span><span class="pl-sr"> <span class="pl-pds">/</span>LQA<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(getusername) <span class="pl-k">||</span><span class="pl-sr"> <span class="pl-pds">/</span>(ENGBQALiox1<span class="pl-k">|</span>PortugueseQA<span class="pl-k">|</span>GermanSMB1<span class="pl-k">|</span>GermanSMB2<span class="pl-k">|</span>GermanSMB3<span class="pl-k">|</span>DADK2LbTransOnl<span class="pl-k">|</span>DADK3LbTransOnl<span class="pl-k">|</span>DADK4LbTransOnl<span class="pl-k">|</span>UkrainianTr1<span class="pl-k">|</span>UkrainianTr2<span class="pl-k">|</span>UkrainianTr3<span class="pl-k">|</span>UkrainianTr4<span class="pl-k">|</span>SvLbTransOnly<span class="pl-k">|</span>PTBR_Translator<span class="pl-k">|</span>LBPolish2<span class="pl-k">|</span>JapaneseLBProd)<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(getusername)) {</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">                    levelbadge.attr(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BvUK-7nCQAAp44F.png<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">                    levelname.<span class="pl-c1">text</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Vendor<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">                    leveldescription.html(<span class="pl-s"><span class="pl-pds">&quot;</span>Professional translator employed by Twitter; &lt;a href=&#39;https://translate.twitter.com/forum/forums/indonesian/topics/6269#post-39296&#39;&gt;learn more&lt;/a&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">                } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span>(conradoldcorn<span class="pl-k">|</span>Kavelicious<span class="pl-k">|</span>unbirthdaytea<span class="pl-k">|</span>b_eimon<span class="pl-k">|</span>monica<span class="pl-k">|</span>bigloser<span class="pl-k">|</span>jakl<span class="pl-k">|</span>nrjeon<span class="pl-k">|</span>DayvieO<span class="pl-k">|</span>haru703<span class="pl-k">|</span>OkidoKim<span class="pl-k">|</span>winfield<span class="pl-k">|</span>constantly<span class="pl-k">|</span>tarmstrong<span class="pl-k">|</span>NLPenguin<span class="pl-k">|</span>edeng<span class="pl-k">|</span>twitter_kr<span class="pl-k">|</span>candacec<span class="pl-k">|</span>MelikeSF<span class="pl-k">|</span>KL7<span class="pl-k">|</span>JasonYZhao<span class="pl-k">|</span>laupezza<span class="pl-k">|</span>imjohnwalsh<span class="pl-k">|</span>sprigoda<span class="pl-k">|</span>alolita<span class="pl-k">|</span>tm<span class="pl-k">|</span>gargi_hazra<span class="pl-k">|</span>FrancescaDM<span class="pl-k">|</span>gianna<span class="pl-k">|</span>jiangts<span class="pl-k">|</span>sunnyjiangsj<span class="pl-k">|</span>mrkyten)<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(getusername)) {</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">                    levelbadge.attr(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://pbs.twimg.com/media/BvhcfnZIcAQQsOQ.png<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">                    levelname.<span class="pl-c1">text</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Localizer<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">                    leveldescription.html(<span class="pl-s"><span class="pl-pds">&quot;</span>Member of Twitter &lt;a href=&#39;https://twitter.com/localizers&#39;&gt;Localization&lt;/a&gt; Team<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.body-dashboard-homepage<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">            jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>head<span class="pl-pds">&quot;</span></span>).append(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;style type=&quot;text/css&quot;&gt;.dashboard-center-list-header {font-size: 24px; line-height: 19px} .dashboar-user-rank .volunteer-since {font-size: 13px} .dashboard-list-item-left.adjacent-to-avatar {width: auto} .dashboard-activity-list .adjacent-to-avatar {width: 70%}&lt;/style&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">            cache(<span class="pl-s"><span class="pl-pds">&#39;</span>feedback<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (cache(<span class="pl-s"><span class="pl-pds">&#39;</span>feedback<span class="pl-pds">&#39;</span></span>) <span class="pl-k">===</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">load</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/learn .dashboard-center &gt; div:nth-child(3) h3<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>(jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata h3:first-child<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">text</span>() <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Feedback<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">var</span> ttcifeedback <span class="pl-k">=</span> jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata h3:last-child<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">text</span>();</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">                        sessionStorage.setItem(<span class="pl-s"><span class="pl-pds">&quot;</span>ttcifeedback<span class="pl-pds">&quot;</span></span>, ttcifeedback);</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span>(sessionStorage.getItem(<span class="pl-s"><span class="pl-pds">&#39;</span>ttcifeedback<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {<span class="pl-c1">document</span>.querySelector(<span class="pl-s"><span class="pl-pds">&#39;</span>.dashboard-headers .dashboard-header:nth-child(3) .dashboard-header-title<span class="pl-pds">&#39;</span></span>).innerHTML<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&quot;</span> &lt;span class=&#39;badge badge-info&#39;&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionStorage.getItem(<span class="pl-s"><span class="pl-pds">&#39;</span>ttcifeedback<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/span&gt;<span class="pl-pds">&quot;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(sessionStorage.getItem(<span class="pl-s"><span class="pl-pds">&#39;</span>ttcifeedback<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {<span class="pl-c1">document</span>.querySelector(<span class="pl-s"><span class="pl-pds">&#39;</span>.dashboard-headers .dashboard-header:nth-child(3) .dashboard-header-title<span class="pl-pds">&#39;</span></span>).innerHTML<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&quot;</span> &lt;span class=&#39;badge badge-info&#39;&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionStorage.getItem(<span class="pl-s"><span class="pl-pds">&#39;</span>ttcifeedback<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/span&gt;<span class="pl-pds">&quot;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">            jqttci(&quot;.dashboar-user-rank&quot;).after(&#39;&lt;br&gt;&lt;div class=&quot;clearfix&quot;&gt;&lt;h4 class=&quot;dashboard-moderators-title clearfix&quot; style=&quot;font-size: 12pt&quot;&gt;Get updates about new strings&lt;/h4&gt;&lt;div class=&quot;dashboard-moderator clearfix&quot;&gt;&lt;a href=&quot;/user/TTC_Feed&quot;&gt;&lt;div class=&quot;dashboard-small-image clearfix pull-left&quot;&gt;&lt;img alt=&quot;TTC Feed&quot; class=&quot;pull-left profile-image img-rounded&quot; src=&quot;https://pbs.twimg.com/profile_images/426006182772236288/Op44ZXb4_reasonably_small.png&quot;&gt;&lt;/div&gt;&lt;/a&gt;&lt;div class=&quot;dashboard-moderator-info clearfix pull-left&quot;&gt;&lt;a href=&quot;/user/TTC_Feed&quot;&gt;&lt;div class=&quot;dashboard-moderator-name black&quot;&gt;TTC Feed&lt;/div&gt;&lt;/a&gt;&lt;a href=&quot;https://twitter.com/TTC_Feed&quot;&gt;&lt;div class=&quot;gray-light&quot;&gt;@TTC_Feed&lt;/div&gt;&lt;/a&gt;&lt;/div&gt;&lt;div class=&quot;dashboard-moderator-follow pull-right&quot;&gt;&lt;iframe id=&quot;twitter-widget-4&quot; scrolling=&quot;no&quot; frameborder=&quot;0&quot; allowtransparency=&quot;true&quot; src=&quot;https://platform.twitter.com/widgets/follow_button.1400006231.html#_=1400623989072&amp;amp;id=twitter-widget-4&amp;amp;lang=en&amp;amp;screen_name=TTC_Feed&amp;amp;show_count=false&amp;amp;show_screen_name=false&amp;amp;size=m&quot; class=&quot;twitter-follow-button twitter-follow-button&quot; title=&quot;Twitter Follow Button&quot; data-twttr-rendered=&quot;true&quot; style=&quot;width: 60px; height: 20px;&quot;&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&#39;);</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">//Forum widget</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> ttcilanguage <span class="pl-k">=</span> <span class="pl-c1">document</span>.querySelector(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-hashtag .gray-dark<span class="pl-pds">&quot;</span></span>).textContent.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>English (UK)<span class="pl-pds">&quot;</span></span>) {ttcilanguage <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>english-uk<span class="pl-pds">&quot;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Kurdish (Central)<span class="pl-pds">&quot;</span></span>) {ttcilanguage <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>kurdish-central<span class="pl-pds">&quot;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Kurdish (Northern)<span class="pl-pds">&quot;</span></span>) {ttcilanguage <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>kurdish-northern<span class="pl-pds">&quot;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Portuguese (Brazil)<span class="pl-pds">&quot;</span></span>) {ttcilanguage <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>portuguese-brazil<span class="pl-pds">&quot;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Simplified Chinese<span class="pl-pds">&quot;</span></span>) {ttcilanguage <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>simplified-chinese<span class="pl-pds">&quot;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Traditional Chinese<span class="pl-pds">&quot;</span></span>) {ttcilanguage <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>traditional-chinese<span class="pl-pds">&quot;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">            jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-sidebar<span class="pl-pds">&quot;</span></span>).after(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;dashboard-center clearfix pull-right&quot;&gt;&lt;div class=&quot;dashboard-center-list dashboard-latest-posts clearfix&quot;&gt;&lt;h3 class=&quot;dashboard-center-list-header clearfix&quot;&gt;Latest posts in &lt;a href=&quot;/forum/forums/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ttcilanguage <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ttcilanguage <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> forum&lt;/a&gt;&lt;/h3&gt;&lt;div class=&quot;dashboard-center-list-body table-layout clearfix forumdash&quot; style=&quot;display: block;&quot;&gt;&lt;div class=&quot;spinner-loader&quot;&gt;Loading…&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (localStorage.getItem(<span class="pl-s"><span class="pl-pds">&quot;</span>TranslateTwitterAdapt_dashboardstate<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> flex_encode(jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-latest-posts<span class="pl-pds">&quot;</span></span>).attr(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>))) <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>false<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">                buildforumdash();</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-c1">document</span>).ready(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">                    jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-latest-posts .close<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span>(c <span class="pl-k">==</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">                            buildforumdash();</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">                            c<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">                    });                   </td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">//Beta approvers</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>((ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Irish<span class="pl-pds">&quot;</span></span>)<span class="pl-k">||</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Esperanto<span class="pl-pds">&quot;</span></span>)<span class="pl-k">||</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Galician<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> locale <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">                    code<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">                    approvers<span class="pl-k">:</span> []</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Irish<span class="pl-pds">&quot;</span></span>) {locale.<span class="pl-c1">code</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>GA<span class="pl-pds">&quot;</span></span>; locale.approvers <span class="pl-k">=</span> [[<span class="pl-s"><span class="pl-pds">&quot;</span>bhriain<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Brian<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>460092892149592064/VP1v-DjZ_reasonably_small.jpeg<span class="pl-pds">&quot;</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>IndigenousTweet<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Indigenous Tweets<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>3379056719/aaae80cfbb47a92d9df7bc5cc1058b64_reasonably_small.jpeg<span class="pl-pds">&quot;</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>Marcas_OLoinn<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Marcas ÓLoinneacháin<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>1700212843/funny_bird_reasonably_small.jpg<span class="pl-pds">&quot;</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>murchadhmor<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Murchadh Mór<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>642288423752105984/0axAiLCA.jpg<span class="pl-pds">&quot;</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>breathnachc<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Cormac Breathnach<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>441165336474165248/DwcytK8v_reasonably_small.jpeg<span class="pl-pds">&quot;</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>MOMeachair<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>MícheálJohnny<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>634733708981964800/gpX0STYY_reasonably_small.jpg<span class="pl-pds">&quot;</span></span>]];}</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Esperanto<span class="pl-pds">&quot;</span></span>) {locale.<span class="pl-c1">code</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>EO<span class="pl-pds">&quot;</span></span>; locale.approvers <span class="pl-k">=</span> [[<span class="pl-s"><span class="pl-pds">&quot;</span>Vikinovajhoj<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Vikinovaĵoj<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>378800000084719631/22da1517c82a3d320ff261dd17b2a700_reasonably_small.png<span class="pl-pds">&quot;</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>tcql<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Tim Channell<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>447555545122082816/Yg-QJzKc_reasonably_small.png<span class="pl-pds">&quot;</span></span>]];}</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span> <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Galician<span class="pl-pds">&quot;</span></span>) {locale.<span class="pl-c1">code</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>GL<span class="pl-pds">&quot;</span></span>; locale.approvers <span class="pl-k">=</span> [[<span class="pl-s"><span class="pl-pds">&quot;</span>braisvarela23<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Brais Varela<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>2138821596/4KK895G2_reasonably_small<span class="pl-pds">&quot;</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>migguis<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>~<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>378800000118289814/3f85f2965f451773a1ff045bbbc03de1_reasonably_small.gif<span class="pl-pds">&quot;</span></span>]];}</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-hashtag-search<span class="pl-pds">&quot;</span></span>).after(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;dashboard-moderators dashboard-approvers clearfix&quot;&gt;&lt;h4 class=&quot;dashboard-moderators-title clearfix&quot;&gt;#TTC_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> locale.<span class="pl-c1">code</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> approvers&lt;/h4&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> locale.approvers.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">                    jqttci(&quot;.dashboard-approvers h4&quot;).after(&#39;&lt;div class=&quot;dashboard-moderator clearfix&quot;&gt;&lt;a href=&quot;/user/&#39; + locale.approvers[i][0] + &#39;&quot;&gt;&lt;div class=&quot;dashboard-small-image clearfix pull-left&quot;&gt;&lt;img alt=&quot;&#39; + locale.approvers[i][1] + &#39;&quot; class=&quot;pull-left profile-image img-rounded&quot; src=&quot;//pbs.twimg.com/profile_images/&#39; + locale.approvers[i][2] + &#39;&quot;&gt;&lt;/div&gt;&lt;/a&gt;&lt;div class=&quot;dashboard-moderator-info clearfix pull-left&quot;&gt;&lt;a href=&quot;/user/&#39; + locale.approvers[i][0] + &#39;&quot;&gt;&lt;div class=&quot;dashboard-moderator-name black&quot;&gt;&#39; + locale.approvers[i][1] + &#39;&lt;/div&gt;&lt;/a&gt;&lt;a href=&quot;https://twitter.com/&#39; + locale.approvers[i][0] + &#39;&quot;&gt;&lt;div class=&quot;dashboard-moderator-username gray-light&quot;&gt;@&#39; + locale.approvers[i][0] + &#39;&lt;/div&gt;&lt;/a&gt;&lt;/div&gt;&lt;div class=&quot;dashboard-moderator-follow pull-right&quot;&gt;&lt;iframe id=&quot;twitter-widget-0&quot; scrolling=&quot;no&quot; frameborder=&quot;0&quot; allowtransparency=&quot;true&quot; src=&quot;https://platform.twitter.com/widgets/follow_button.331904cc91ddebde387d36578bfb9deb.en.html#_=1421631403208&amp;amp;dnt=false&amp;amp;id=twitter-widget-0&amp;amp;lang=en&amp;amp;screen_name=&#39; + locale.approvers[i][0] + &#39;&amp;amp;show_count=false&amp;amp;show_screen_name=false&amp;amp;size=m&quot; class=&quot;twitter-follow-button twitter-follow-button&quot; title=&quot;Twitter Follow Button&quot; data-twttr-rendered=&quot;true&quot; style=&quot;width: 59px; height: 20px;&quot;&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;&#39;);</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">//Mods activity</span></td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-moderators<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-sidebar<span class="pl-pds">&quot;</span></span>).after(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;dashboard-center clearfix pull-right&quot;&gt;&lt;div class=&quot;dashboard-center-list dashboard-activity-moderators&quot;&gt;&lt;h3 class=&quot;dashboard-center-list-header clearfix&quot;&gt;Moderators activity&lt;/h3&gt;&lt;div class=&quot;dashboard-center-list-body table-layout moderatorsdash&quot;&gt;&lt;div class=&quot;spinner-loader&quot;&gt;Loading…&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (localStorage.getItem(<span class="pl-s"><span class="pl-pds">&quot;</span>TranslateTwitterAdapt_dashboardstate<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> flex_encode(jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-activity-moderators<span class="pl-pds">&quot;</span></span>).attr(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>))) <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>false<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">                    buildmodsdash();</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">                    jqttci(<span class="pl-c1">document</span>).ready(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">                        jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-activity-moderators .close<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">if</span>(c <span class="pl-k">==</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">                                buildmodsdash();</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">                                c<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">                        });                   </td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">                    });</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// Favorites activity</span></td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(ttcilanguage <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Lolcat<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-center.pull-right:nth-last-child(3)<span class="pl-pds">&quot;</span></span>).before(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;dashboard-center clearfix pull-right&quot;&gt;&lt;div class=&quot;dashboard-center-list dashboard-activity-favorites&quot;&gt;&lt;h3 class=&quot;dashboard-center-list-header clearfix&quot;&gt;&lt;a href=&quot;#&quot; id=&quot;addfavorite&quot;&gt;+&lt;/a&gt; Favorites activity &lt;small&gt;(&lt;a href=&quot;#&quot; class=&quot;favoritedelete&quot;&gt;clear&lt;/a&gt;)&lt;/small&gt;&lt;/h3&gt;&lt;div class=&quot;dashboard-center-list-body table-layout favoritesdash&quot; style=&quot;display: block;&quot;&gt;&lt;div class=&quot;spinner-loader&quot;&gt;Loading…&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (localStorage.getItem(<span class="pl-s"><span class="pl-pds">&quot;</span>TranslateTwitterAdapt_dashboardstate<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> flex_encode(jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-activity-favorites<span class="pl-pds">&quot;</span></span>).attr(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>))) <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>false<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">                    buildfavsdash();</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">                    jqttci(<span class="pl-c1">document</span>).ready(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">                        jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-activity-favorites .close<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">if</span>(c <span class="pl-k">==</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">                                buildfavsdash();</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">                                c<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">                        });                   </td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">                    });</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#addfavorite<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (localStorage.getItem(<span class="pl-s"><span class="pl-pds">&quot;</span>TranslateTwitterAdapt_dashboardstate<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> flex_encode(jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-activity-favorites<span class="pl-pds">&quot;</span></span>).attr(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>))) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>false<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">                        jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-activity-favorites .close<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> newfavorite <span class="pl-k">=</span> <span class="pl-c1">prompt</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Please enter a username to add to this widget<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>favoriteusername<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>(newfavorite <span class="pl-k">!==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">                        toptranslators[toptranslators.<span class="pl-c1">length</span>] <span class="pl-k">=</span> newfavorite;</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">                        localStorage.setItem(<span class="pl-s"><span class="pl-pds">&#39;</span>ttcifavorites<span class="pl-pds">&#39;</span></span>, toptranslators);</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">                        lastprofileac(newfavorite, <span class="pl-s"><span class="pl-pds">&quot;</span>.favoritesdash<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.favoritedelete<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">                    localStorage.removeItem(<span class="pl-s"><span class="pl-pds">&quot;</span>ttcifavorites<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">                    toptranslators <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">                    jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.favoritesdash .dashboard-center-list-item<span class="pl-pds">&quot;</span></span>).remove();</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">//Dashboard by Flexlex</span></td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> <span class="pl-en">dashboard</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">p</span>) {</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> dashboardstate <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> id <span class="pl-k">=</span> flex_encode(p.<span class="pl-c1">className</span>);</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> dash <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">                    dashboard<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">                    container<span class="pl-k">:</span> p,</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">                    header<span class="pl-k">:</span> p.querySelector(<span class="pl-s"><span class="pl-pds">&quot;</span>h3.dashboard-center-list-header<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">                    button<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">                    body<span class="pl-k">:</span> p.querySelector(<span class="pl-s"><span class="pl-pds">&quot;</span>div.dashboard-center-list-body<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">                    set <span class="pl-en">state</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">var</span> bool <span class="pl-k">=</span> booleanize(value);</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">                        dashboardstate <span class="pl-k">=</span> bool;</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">                        localStorage[<span class="pl-s"><span class="pl-pds">&quot;</span>TranslateTwitterAdapt_dashboardstate<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> id] <span class="pl-k">=</span> bool;</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">                        dash.<span class="pl-c1">body</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> bool <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>block<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> (dash.button)</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">                            dash.button.innerHTML <span class="pl-k">=</span> bool <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;#215;<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;#9662;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">                    },</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">                    get <span class="pl-en">state</span>() {</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">return</span> booleanize(localStorage[<span class="pl-s"><span class="pl-pds">&quot;</span>TranslateTwitterAdapt_dashboardstate<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> id]);</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">                dash.state <span class="pl-k">=</span> (booleanize(localStorage) <span class="pl-k">&amp;&amp;</span> booleanize(localStorage[<span class="pl-s"><span class="pl-pds">&quot;</span>TranslateTwitterAdapt_dashboardstate<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> id]));</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">                dash.header.insertAdjacentHTML(<span class="pl-s"><span class="pl-pds">&quot;</span>beforeEnd<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;button class=<span class="pl-cce">\&quot;</span>close<span class="pl-cce">\&quot;</span>&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (dash.state <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;#215;<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;#9662;<span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/button&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">                dash.button <span class="pl-k">=</span> dash.header.querySelector(<span class="pl-s"><span class="pl-pds">&quot;</span>button<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">                dash.button.addEventListener(<span class="pl-s"><span class="pl-pds">&quot;</span>click<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">                    dash.state <span class="pl-k">=</span> <span class="pl-k">!</span>dash.state;</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">                }, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">                dash.button.<span class="pl-c1">style</span>.cursor <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>pointer<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> dashboards_match <span class="pl-k">=</span> <span class="pl-c1">document</span>.querySelectorAll(<span class="pl-s"><span class="pl-pds">&quot;</span>div.dashboard-center-list<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> dashboards <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> (i <span class="pl-k">=</span> dashboards_match.<span class="pl-c1">length</span>; <span class="pl-k">--</span>i <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>;) {</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">                dashboards.<span class="pl-c1">push</span>(<span class="pl-k">new</span> <span class="pl-en">dashboard</span>(dashboards_match[i]));</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">            <span class="pl-v">this</span>.dashboard <span class="pl-k">=</span> dashboards;</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">            <span class="pl-v">this</span>.bool <span class="pl-k">=</span> booleanize;</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ((<span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">href</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>https://translate.twitter.com/learn<span class="pl-pds">&quot;</span></span>) <span class="pl-k">!=</span> <span class="pl-k">-</span><span class="pl-c1">1</span>)<span class="pl-k">&amp;&amp;</span>(jqttci(<span class="pl-s"><span class="pl-pds">&#39;</span>.dashboard-tile-image img[alt=&quot;Lessons&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>)) {</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">            jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-center .dashboard-tile:first-child .dashboard-tile-right h3<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">text</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Loading...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">            jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">load</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/lessons .label<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> ttcitotallessons <span class="pl-k">=</span> jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata .label<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> ttcitotallessonsfinished <span class="pl-k">=</span> jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata .complete<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">                jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.dashboard-center .dashboard-tile:first-child .dashboard-tile-right h3<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">text</span>(ttcitotallessonsfinished <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> ttcitotallessons);</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">//links dropdown</span></td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">        jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>.nav-secondary.pull-right &gt; li:nth-last-child(2) ul<span class="pl-pds">&quot;</span></span>).prepend(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li&gt;&lt;a href=&quot;/forum/forums/getting-started/topics/7042&quot;&gt;How it works&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;/forum/forums/useful-guidelines/topics/7039&quot;&gt;General style guidelines&lt;/a&gt;&lt;/li&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">    jqttci(<span class="pl-s"><span class="pl-pds">&quot;</span>#improverdata<span class="pl-pds">&quot;</span></span>).html(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">TranslateTwitterAdapt();</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.09476s from github-fe138-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-Fhzsf0y5oYf2bC7Lj1nJCY4q1kRYr5F+xy+dYda4CJs=" src="https://assets-cdn.github.com/assets/frameworks-161cec7f4cb9a187f66c2ecb8f59c9098e2ad64458af917ec72f9d61d6b8089b.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-JHIkFvBNjOMQ/pihPvtz6d2ZK1HCiyPyKVEHhpFbXxk=" src="https://assets-cdn.github.com/assets/github-24722416f04d8ce310fe98a13efb73e9dd992b51c28b23f229510786915b5f19.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

