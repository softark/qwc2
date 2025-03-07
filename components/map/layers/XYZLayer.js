/**
 * Copyright 2021 Oslandia SAS <infos+qwc2@oslandia.com>
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ol from 'openlayers';

import ConfigUtils from '../../../utils/ConfigUtils';

export default {
    create: (options) => {
        return new ol.layer.Tile({
            minResolution: options.minResolution,
            maxResolution: options.maxResolution,
            preload: ConfigUtils.getConfigProp("tilePreloadLevels", null, 0),
            source: new ol.source.XYZ({
                url: options.url,
                projection: options.projection,
                ...(options.sourceConfig || {})
            }),
            ...(options.layerConfig || {})
        });
    }
};
