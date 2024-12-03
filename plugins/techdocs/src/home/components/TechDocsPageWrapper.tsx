/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';

import { PageWithHeader } from '@backstage/core-components';
import { useApi, configApiRef } from '@backstage/core-plugin-api';

/**
 * Props for {@link TechDocsPageWrapper}
 *
 * @public
 */
export type TechDocsPageWrapperProps = {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
};

/**
 * Component wrapping a TechDocs page with Page and Header components
 *
 * @public
 */
export const TechDocsPageWrapper = (props: TechDocsPageWrapperProps) => {
  const { children, title, subtitle, showSubtitle = true } = props;
  const configApi = useApi(configApiRef);
  const generatedSubtitle =
    subtitle ||
    `Documentation available in ${
      configApi.getOptionalString('organization.name') ?? 'Backstage'
    }`;

  return (
    <PageWithHeader
      title={title || 'Documentation'}
      subtitle={showSubtitle ? generatedSubtitle : undefined}
      themeId="documentation"
    >
      {children}
    </PageWithHeader>
  );
};
