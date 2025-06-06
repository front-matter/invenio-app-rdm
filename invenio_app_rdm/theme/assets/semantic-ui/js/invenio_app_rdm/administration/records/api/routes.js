/*
 * This file is part of Invenio.
 * Copyright (C) 2023 CERN.
 *
 * Invenio is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import { last } from "lodash";
import _get from "lodash/get";

const APIRoutesGenerators = {
  delete: (record, idKeyPath = "id") => {
    return `/api/records/${_get(record, idKeyPath)}/delete`;
  },
  compare: (record, idKeyPath = "id") => {
    return `/api/records/${_get(record, idKeyPath)}/revisions`;
  },
  restore: (record, idKeyPath = "id") => {
    return `/api/records/${_get(record, idKeyPath)}/restore`;
  },
  lastRevision: (record, revisionId, includePrevious = false, idKeyPath = "id") => {
    return `/api/records/${_get(
      record,
      idKeyPath
    )}/revisions/${revisionId}?include_previous=${includePrevious}`;
  },
};
export const APIRoutes = {
  ...APIRoutesGenerators,
};
