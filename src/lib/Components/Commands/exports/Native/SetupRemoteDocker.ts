import { GenerableType } from '../../../../Config/exports/Mapping';
import { StringParameter } from '../../../Parameters/types';
import { CommandParameters, CommandShape } from '../../types/Command.types';
import { Command } from '../Command';

/**
 * Creates a remote Docker environment configured to execute Docker commands.
 * @see {@link https://circleci.com/docs/2.0/configuration-reference/#setupremotedocker}
 */
export class SetupRemoteDocker implements Command {
  parameters: SetupRemoteDockerParameters;
  constructor(
    parameters: SetupRemoteDockerParameters = { version: '20.10.6' },
  ) {
    this.parameters = parameters;
  }
  /**
   * Generate SetupRemoteDocker Command shape.
   * @returns The generated JSON for the SetupRemoteDocker Commands.
   */
  generate(): SetupRemoteDockerCommandShape {
    return {
      setup_remote_docker: { ...this.parameters },
    };
  }

  get name(): StringParameter {
    return 'setup_remote_docker';
  }

  get generableType(): GenerableType {
    return GenerableType.SETUP_REMOTE_DOCKER;
  }
}

/**
 * Command parameters for the SetupRemoteDocker command
 */
export interface SetupRemoteDockerParameters extends CommandParameters {
  /**
   * SetupRemoteDocker directory.
   * Will be interpreted relative to the working_directory of the job.
   */
  version: StringParameter;
}

/**
 * Generated Shape of the SetupRemoteDocker command.
 */
interface SetupRemoteDockerCommandShape extends CommandShape {
  setup_remote_docker: SetupRemoteDockerParameters;
}
