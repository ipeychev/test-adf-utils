import { traverse } from '@atlaskit/adf-utils';
// import { traverse } from '@atlaskit/adf-utils/traverse.es';
// import { traverse } from '@atlaskit/adf-utils/traverse.js';

const doc = {/* some ADF doc */};

  traverse(doc, {
    taskList: (_node: unknown, _parent: unknown) => {
    }
  })