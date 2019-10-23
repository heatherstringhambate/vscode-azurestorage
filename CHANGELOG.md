# Change Log
All notable changes to the "vscode-azurestorage" extension will be documented in this file.

## 0.7.2 - 2019-10-11
### Fixed
- Deploying folders beginning with `.` to static websites is allowed [#457](https://github.com/Microsoft/vscode-azurestorage/issues/457)
- Copying connection strings works properly for VS Code remote [#459](https://github.com/Microsoft/vscode-azurestorage/issues/459)

## 0.7.1 - 2019-07-31
### Fixed
- Deployment of large static websites lead to timeout errors
[#352](https://github.com/Microsoft/vscode-azurestorage/issues/352), [#345](https://github.com/Microsoft/vscode-azurestorage/issues/345), [#370](https://github.com/Microsoft/vscode-azurestorage/issues/370), [#334](https://github.com/Microsoft/vscode-azurestorage/issues/334), [#340](https://github.com/Microsoft/vscode-azurestorage/issues/340), [#338](https://github.com/Microsoft/vscode-azurestorage/issues/338), [#339](https://github.com/Microsoft/vscode-azurestorage/issues/339), [#342](https://github.com/Microsoft/vscode-azurestorage/issues/342), [#317](https://github.com/Microsoft/vscode-azurestorage/issues/317), [#362](https://github.com/Microsoft/vscode-azurestorage/issues/362)

## 0.7.0 - 2019-02-19
### Fixed
- Improved installation and start-up performance

## 0.6.0 - 2019-02-01
### Fixed
- Web apps containing out, dist, or build folders will have more convenient defaults when deploying to a static website [#176](https://github.com/Microsoft/vscode-azurestorage/issues/176), [#173](https://github.com/Microsoft/vscode-azurestorage/issues/173)
- Validation of text file name during file creation [#148](https://github.com/Microsoft/vscode-azurestorage/issues/148)

### Added
- Enabling, disabling and configuring static website capability from the extension [#153](https://github.com/Microsoft/vscode-azurestorage/issues/153), [#277](https://github.com/Microsoft/vscode-azurestorage/issues/277)
- Creating (GPv2) and deleting storage accounts from the extension [#278](https://github.com/Microsoft/vscode-azurestorage/issues/278), [#291](https://github.com/Microsoft/vscode-azurestorage/issues/291)

## 0.5.0 - 2018-12-11
### Fixed
- [Copy connection string](https://github.com/Microsoft/vscode-azurestorage/issues/141) now works on linux

### Added
- [Themed icons](https://github.com/Microsoft/vscode-azurestorage/issues/6)
- [Pre-publish for static websites](https://github.com/Microsoft/vscode-azurestorage/issues/216)
- Provisional support for [sovereign accounts in Azure](https://github.com/Microsoft/vscode-azurestorage/pull/253)

## 0.4.2 - 2018-09-28

### Fixed
- Can get a command not found error attempting to run some commands before extension is activated [#232](https://github.com/Microsoft/vscode-azurestorage/issues/232)

## 0.4.1 - 2018-07-30

### Changed
- Static website functionality is now enabled always in the extension (azureStorage.preview.staticWebsites setting has been removed)

### Added
- "Browse Static Website…" will bring up a storage account's primary web endpoint in a browser (see [Deploy to Static Website](README.md/#deploy-to-static-website))

### Fixed
- Can now browse directly after deploying (no need to go to Portal to get primary web endpoint)
- Ensure storage account can support hosted websites and that it is enabled when deploying, browsing etc., fixes [#174](https://github.com/Microsoft/vscode-azurestorage/issues/174), [#175](https://github.com/Microsoft/vscode-azurestorage/issues/175)
- Ensure website hosting has an index document set when browsing (to avoid getting a 404 error)

## 0.4.0 - 2018-06-18

### Added
- Deploy to static websites (preview feature, must be [enabled](README.md/#preview-features) first)

## 0.3.1 - 2018-05-09

### Added
- Newly-created blobs and files are now opened immediately in the editor
- Copy URL to clipboard (blob, blob container, file, directory, or file share)

### Changed
- Moved Azure Storage Explorer to new Azure view container instead of file explorer

## 0.3.0 - 2018-04-05
### Added
- Upload and download block blobs with text contents, up to 4MB
- Refresh menu added to additional nodes in the tree
- New filter button on subscription nodes to make selecting Azure subscriptions easier

### Fixed
- Saving a blob from the editor will no longer cause loss of content type and other properties
- Will no longer overwrite an existing blob when creating a new one with the same name
- Removed redundant Close button in some dialogs

## 0.2.0 - 2018-02-02
### Added
- Create and delete blob containers, file shares, queues and tables
- Create empty block blobs (text only), files and directories
- Delete blobs, files and directories

### Fixed
- Improved error handling

## 0.1.3 - 2017-12-15
### Added
 - Changed TreeItems to use the common ui library 'vscode-azureextensionui'.

### Fixed
 - Fixed hash-mismatch issue for Blob and File Download by using 'ToLocalFile' instead of 'ToText' download methods.

## 0.1.2 - 2017-12-13
### Fixed
 - Resolved extension loading issue on Windows machines.

## 0.1.1 - 2017-12-08
### Fixed
 - Updated package to have better description.

## 0.1.0 - 2017-12-08
### Added
 - Explore Blob Containers, File Shares, Queues and Tables
 - Access Connection String and Primary Key
 - Edit Block Blobs and Files
 - Open in Storage Explorer for memory or computationally heavy tasks.
