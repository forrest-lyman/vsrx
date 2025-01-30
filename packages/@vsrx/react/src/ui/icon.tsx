import '@vscode/codicons/dist/codicon.css'; // Import Codicons CSS
import React from 'react';

type CodiconNames =
    | 'add'
    | 'archive'
    | 'arrow-both'
    | 'arrow-down'
    | 'arrow-left'
    | 'arrow-right'
    | 'arrow-small-down'
    | 'arrow-small-left'
    | 'arrow-small-right'
    | 'arrow-small-up'
    | 'arrow-up'
    | 'beaker'
    | 'bell'
    | 'bold'
    | 'book'
    | 'bookmark'
    | 'briefcase'
    | 'broadcast'
    | 'browser'
    | 'bug'
    | 'calendar'
    | 'check'
    | 'checklist'
    | 'chevron-down'
    | 'chevron-left'
    | 'chevron-right'
    | 'chevron-up'
    | 'chrome-close'
    | 'chrome-maximize'
    | 'chrome-minimize'
    | 'chrome-restore'
    | 'circle'
    | 'circle-filled'
    | 'circle-outline'
    | 'circle-slash'
    | 'circuit-board'
    | 'clippy'
    | 'clock'
    | 'close'
    | 'cloud'
    | 'cloud-download'
    | 'cloud-upload'
    | 'code'
    | 'comment'
    | 'comment-discussion'
    | 'credit-card'
    | 'dash'
    | 'dashboard'
    | 'database'
    | 'desktop-download'
    | 'device-camera'
    | 'device-camera-video'
    | 'device-desktop'
    | 'device-mobile'
    | 'diff'
    | 'diff-added'
    | 'diff-ignored'
    | 'diff-modified'
    | 'diff-removed'
    | 'diff-renamed'
    | 'edit'
    | 'ellipsis'
    | 'ellipsis-vertical'
    | 'eye'
    | 'eye-closed'
    | 'file'
    | 'file-binary'
    | 'file-code'
    | 'file-directory'
    | 'file-media'
    | 'file-pdf'
    | 'file-submodule'
    | 'file-symlink-directory'
    | 'file-symlink-file'
    | 'file-zip'
    | 'flame'
    | 'fold'
    | 'fold-down'
    | 'fold-up'
    | 'gear'
    | 'gift'
    | 'gist'
    | 'gist-fork'
    | 'gist-new'
    | 'gist-private'
    | 'gist-secret'
    | 'git-branch'
    | 'git-commit'
    | 'git-compare'
    | 'git-fork-private'
    | 'git-merge'
    | 'git-pull-request'
    | 'github-action'
    | 'globe'
    | 'grabber'
    | 'graph'
    | 'heart'
    | 'history'
    | 'home'
    | 'horizontal-rule'
    | 'hubot'
    | 'inbox'
    | 'info'
    | 'issue-closed'
    | 'issue-opened'
    | 'issue-reopened'
    | 'italic'
    | 'jersey'
    | 'json'
    | 'kebab-horizontal'
    | 'kebab-vertical'
    | 'key'
    | 'law'
    | 'light-bulb'
    | 'link'
    | 'link-external'
    | 'list-ordered'
    | 'list-unordered'
    | 'location'
    | 'lock'
    | 'logo-github'
    | 'mail'
    | 'mail-read'
    | 'mail-reply'
    | 'mark-github'
    | 'markdown'
    | 'megaphone'
    | 'mention'
    | 'milestone'
    | 'mirror'
    | 'mortar-board'
    | 'mute'
    | 'no-newline'
    | 'note'
    | 'octoface'
    | 'organization'
    | 'package'
    | 'paintcan'
    | 'pencil'
    | 'person'
    | 'pin'
    | 'play'
    | 'plug'
    | 'plus'
    | 'primitive-dot'
    | 'primitive-square'
    | 'project'
    | 'pulse'
    | 'question'
    | 'quote'
    | 'radio-tower'
    | 'reply'
    | 'repo'
    | 'repo-clone'
    | 'repo-force-push'
    | 'repo-forked'
    | 'repo-pull'
    | 'repo-push'
    | 'report'
    | 'request-changes'
    | 'rocket'
    | 'rss'
    | 'ruby'
    | 'screen-full'
    | 'screen-normal'
    | 'search'
    | 'server'
    | 'settings'
    | 'shield'
    | 'sign-in'
    | 'sign-out'
    | 'smiley'
    | 'squirrel'
    | 'star'
    | 'stop'
    | 'sync'
    | 'tag'
    | 'tasklist'
    | 'telescope'
    | 'terminal'
    | 'text-size'
    | 'three-bars'
    | 'thumbsdown'
    | 'thumbsup'
    | 'tools'
    | 'trash'
    | 'triangle-down'
    | 'triangle-left'
    | 'triangle-right'
    | 'triangle-up'
    | 'unfold'
    | 'unmute'
    | 'unverified'
    | 'verified'
    | 'versions'
    | 'watch'
    | 'x'
    | 'zap';

export interface IconProps {
    iconName: CodiconNames;
    size?: number;
}

export const Icon: React.FC<IconProps> = ({ iconName, size = 16 }) => {
  return (
    <span
      className={`codicon codicon-${iconName}`}
      style={{ fontSize: size, display: 'inline-block' }}
      aria-hidden="true"
    />
  );
};