import { DefaultLibraryAuthor } from '../../constants';
import {
    CliProcessCommand,
    ICliCommandAuthor,
    ICliCommandProcessor,
    ICliExecutionContext,
} from '../models';

export class CliClearCommandProcessor implements ICliCommandProcessor {
    command = 'clear';

    description?: string | undefined = 'Clears the terminal';

    author?: ICliCommandAuthor | undefined = DefaultLibraryAuthor;

    async processCommand(
        _: CliProcessCommand,
        context: ICliExecutionContext,
    ): Promise<void> {
        context.terminal.clear();
    }
}

export class CliEchoCommandProcessor implements ICliCommandProcessor {
    command = 'echo';

    description?: string | undefined = 'Prints the specified text';

    allowUnlistedCommands?: boolean | undefined = true;

    author?: ICliCommandAuthor | undefined = DefaultLibraryAuthor;

    async processCommand(
        command: CliProcessCommand,
        context: ICliExecutionContext,
    ): Promise<void> {
        context.writer.writeln(command.command.replace('echo ', '').trim());
    }

    writeDescription(context: ICliExecutionContext): void {
        context.writer.writeln('echo <text>');
        context.writer.writeln('Prints the specified text');
    }
}

export { CliPingCommandProcessor } from './cli-ping-command-processor';

export { CliHelpCommandProcessor } from './cli-help-command-processor';

export { CliSwitchUserCommandProcessor } from './cli-switch-user-command-processor';

export { CliVersionCommandProcessor } from './cli-version-command-processor';

export { CliLogsCommandProcessor } from './cli-logs-command-processor';

export { CliHistoryCommandProcessor } from './cli-history-command-processor';

export { CliLocalStorageCommandProcessor } from './cli-local-storage-command-processor';

export { CliCookiesCommandProcessor } from './cli-cookies-command-processor';

export { CliWhoamiCommandProcessor } from './cli-whoami-command-processor';

export { CliThemeCommandProcessor } from './cli-theme-command-processor';

export { CliRegexCommandProcessor } from './cli-regex-command-processor';
