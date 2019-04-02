import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Icon from "@mdi/react"
import { mdiCubeOutline } from "@mdi/js"

export default () => (
  <div>
    <AppBar>
      <div>
        <p>
          <Icon path={mdiCubeOutline}
                size="30px"
                color="#FFF"
          />
          卡杜拉维 MC1.12.2 Mod服
        </p>
      </div>
    </AppBar>
  </div>
)