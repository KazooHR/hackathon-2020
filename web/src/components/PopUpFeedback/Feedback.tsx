import React from "react";
import { Card, Button, Header, Text, Flex, Spacer } from "@kazoohr/confetti";
import { Rating } from "@material-ui/lab";

export interface PopUpFeedbackProps {
     action: string;
     subject: string;
    question: string;
    value: string;
}

export function PopUpFeedback({feedback}: {feedback: PopUpFeedbackProps}) {
    return (
        <Card
            barBrandingClass=""
            barColor=""
            barLocation="top"
            className=""
            withBorder
        >
            <Header level="3" size="small">{feedback.action}</Header>
            <Header level="1" size="medium" thick>{feedback.subject}</Header>
            <Text>{feedback.question}{" "}<b>{feedback.value}</b>{"?"}</Text>
            <Flex>
                <Rating style={{fontSize: "64px", color: "#2A5CDB"}} name="half-rating" defaultValue={2.5} precision={0.5} size="large"/>
            </Flex>
            <Button onClick={null}>
                Add a comment (optional)
            </Button>
            <Spacer size="medium" orientation="horizontal" />
            <Text>{"Your feedback is shared with Neha anonymously."}</Text>
            <Spacer size="medium" orientation="horizontal" />

            <Button onClick={null}>
                Submit Feeback
            </Button>
            <Button onClick={null}>
                Remind me later
            </Button>
        </Card>
            )
}
