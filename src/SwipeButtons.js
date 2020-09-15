import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"

import './SwipeButtons.css'

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon />
            </IconButton>
            <IconButton className="swipeButtons__close">
                <CloseIcon ></CloseIcon>
            </IconButton>
            <IconButton className="swipeButtons_star">
                <StarRateIcon ></StarRateIcon>
            </IconButton>
            <IconButton className="swipeButtons_favorite">
                <FavoriteIcon ></FavoriteIcon>
            </IconButton>
            <IconButton className="swipeButtons_flash">
                <FlashOnIcon ></FlashOnIcon>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
