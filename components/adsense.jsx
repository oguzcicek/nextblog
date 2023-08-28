
import React from "react";
import { Adsense } from "@ctrl/react-adsense";

function Ads() {
    return (
        <div className="text-center adsbygoogle my-3">
            <Adsense
                client="ca-pub-2928610726292199"
                slot="6532059964"
                style={{ display: "block" }}
                layout="in-article"
                format="fluid"
            />
        </div>
    );
}