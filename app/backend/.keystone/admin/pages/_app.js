import React from 'react';

import { KeystoneProvider } from '@keystone-next/admin-ui/context';
import { ErrorBoundary } from '@keystone-next/admin-ui/components';
import { Core } from '@keystone-ui/core';

import * as viewc5465613 from '../../../node_modules/@keystone-next/fields/types/mongoId/views';
import * as view541237f5 from '../../../node_modules/@keystone-next/fields/types/text/views';
import * as view7d65d00b from '../../../node_modules/@keystone-next/fields/types/password/views';
import * as viewe54fff75 from '../../../node_modules/@keystone-next/fields/types/relationship/views';
import * as view3e78df3d from '../../../node_modules/@keystone-next/fields/types/timestamp/views';
import * as viewa30514e7 from '../../../node_modules/@keystone-next/fields/types/select/views';
import * as viewf6e51265 from '../../../node_modules/@keystone-next/fields/types/integer/views';
import * as viewd49313eb from '../../../node_modules/@keystone-next/cloudinary/views';
import * as viewbf71f78f from '../../../node_modules/@keystone-next/fields/types/virtual/views';
import * as view4f6f98c9 from '../../../node_modules/@keystone-next/fields/types/checkbox/views';

const adminConfig = {};

const fieldViews = {
  viewc5465613,
  view541237f5,
  view7d65d00b,
  viewe54fff75,
  view3e78df3d,
  viewa30514e7,
  viewf6e51265,
  viewd49313eb,
  viewbf71f78f,
  view4f6f98c9,
};

const lazyMetadataQuery = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'keystone',
              loc: { start: 22, end: 30 },
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'adminMeta',
                    loc: { start: 39, end: 48 },
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'lists',
                          loc: { start: 59, end: 64 },
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'key',
                                loc: { start: 77, end: 80 },
                              },
                              arguments: [],
                              directives: [],
                              loc: { start: 77, end: 80 },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'isHidden',
                                loc: { start: 91, end: 99 },
                              },
                              arguments: [],
                              directives: [],
                              loc: { start: 91, end: 99 },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'fields',
                                loc: { start: 110, end: 116 },
                              },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'path',
                                      loc: { start: 131, end: 135 },
                                    },
                                    arguments: [],
                                    directives: [],
                                    loc: { start: 131, end: 135 },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'createView',
                                      loc: { start: 148, end: 158 },
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'fieldMode',
                                            loc: { start: 175, end: 184 },
                                          },
                                          arguments: [],
                                          directives: [],
                                          loc: { start: 175, end: 184 },
                                        },
                                      ],
                                      loc: { start: 159, end: 198 },
                                    },
                                    loc: { start: 148, end: 198 },
                                  },
                                ],
                                loc: { start: 117, end: 210 },
                              },
                              loc: { start: 110, end: 210 },
                            },
                          ],
                          loc: { start: 65, end: 220 },
                        },
                        loc: { start: 59, end: 220 },
                      },
                    ],
                    loc: { start: 49, end: 228 },
                  },
                  loc: { start: 39, end: 228 },
                },
              ],
              loc: { start: 31, end: 234 },
            },
            loc: { start: 22, end: 234 },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authenticatedItem' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'User' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export default function App({ Component, pageProps }) {
  return (
    <Core>
      <KeystoneProvider
        adminConfig={adminConfig}
        adminMetaHash="1johfh5"
        fieldViews={fieldViews}
        lazyMetadataQuery={lazyMetadataQuery}
      >
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </KeystoneProvider>
    </Core>
  );
}
