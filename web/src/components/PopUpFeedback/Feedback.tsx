import React, { useState } from "react";
import { Card, Button, Header, Text, Icon } from "@kazoohr/confetti";

export interface PopUpFeedbackProps {

}
export function PopUpFeedback(feedback: PopUpFeedbackProps) {
    return (
        <Card
            barBrandingClass=""
            barColor=""
            barLocation="top"
            className=""
            withBorder
        >
            <p>
                Non laborum velit. Quidem eaque distinctio reprehenderit cumque beatae possimus nisi. Repudiandae sit vero reprehenderit atque quibusdam dignissimos.
            </p>
            <Button onClick={null}>
                Button!
            </Button>
        </Card>
            )
}
