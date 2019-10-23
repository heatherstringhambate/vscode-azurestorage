/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { AzureParentTreeItem, IActionContext, registerCommand } from 'vscode-azureextensionui';
import { DirectoryTreeItem } from './directoryNode';
import { IFileShareCreateChildContext } from './fileShareNode';

export function registerDirectoryActionHandlers(): void {
    registerCommand("azureStorage.deleteDirectory", async (context: IActionContext, treeItem: AzureParentTreeItem) => await treeItem.deleteTreeItem(context));
    registerCommand("azureStorage.createSubdirectory", async (context: IActionContext, treeItem: AzureParentTreeItem) => await treeItem.createChild(<IFileShareCreateChildContext>{ ...context, childType: DirectoryTreeItem.contextValue }));

    // Note: azureStorage.createTextFile is registered in fileShareActionHandlers
}
