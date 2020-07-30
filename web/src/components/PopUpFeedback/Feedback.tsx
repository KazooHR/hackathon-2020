import React from "react";
import { Card, Button, Header, Text, IconButton, Flex, Spacer } from "@kazoohr/confetti";

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
                <IconButton
                    className=""
                    icon="rating"
                    iconSize={16}
                    iconVariant="regular"
                    onClick={null}
                    size={16}
                    system={false}
                />
                <IconButton
                    className=""
                    icon="rating"
                    iconSize={16}
                    iconVariant="regular"
                    onClick={null}
                    size={16}
                    system={false}
                />
                <IconButton
                    className=""
                    icon="rating"
                    iconSize={16}
                    iconVariant="regular"
                    onClick={null}
                    size={16}
                    system={false}
                />
                <IconButton
                    className=""
                    icon="rating"
                    iconSize={16}
                    iconVariant="regular"
                    onClick={null}
                    size={16}
                    system={false}
                />
                <IconButton
                    className=""
                    icon="rating"
                    iconSize={16}
                    iconVariant="regular"
                    onClick={null}
                    size={16}
                    system={false}
                />
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
