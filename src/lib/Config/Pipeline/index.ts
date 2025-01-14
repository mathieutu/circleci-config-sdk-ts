import { Project } from './Project';
import { Git } from './Git';
/**
 * Not fully implemented yet. Fetch pipeline parameters from inside a CircleCI job.
 * @alpha
 */
export class Pipeline {
  /**
   * Pipeline parameter values are passed at the config level on CircleCI. These values will not be present on a local system.
   */
  private _isLocal: boolean;
  /**
   * Array of user defined parameters
   */
  constructor() {
    if (process.env.CIRCLECI == 'true') {
      this._isLocal = false;
    } else {
      this._isLocal = true;
    }
  }
  /**
   * A globally unique id representing for the pipeline
   * @beta
   */
  get id(): string {
    if (this._isLocal) {
      return 'local';
    } else {
      return 'NOT YET SUPPORTED';
    }
  }
  /**
   * A project unique integer id for the pipeline
   * @beta
   */
  get number(): number {
    if (this._isLocal) {
      return 0;
    } else {
      return -1;
    }
  }
  /**
   * Project metadata
   */
  project(): Project {
    return new Project(this._isLocal);
  }
  /**
   * Git metadata
   */
  git(): Git {
    return new Git(this._isLocal);
  }
}
