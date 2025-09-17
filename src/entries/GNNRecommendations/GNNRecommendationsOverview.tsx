import { FC } from "react";
import { OverviewTemplate } from "../Templates";

const GNNRecommendationsOverview: FC = () => {
  return (
    <OverviewTemplate showDetailsPrompt={"More on this internship"}>
      <h2>Why this topic?</h2>
      <p>
        This is my 3rd year Individual
        Project. As the amount of information gathered from user interactions
        booms, companies are heavily incentivised to tailor some services to
        their clients using specific information about how they interact with
        their (and other) systems. The most direct example of this is
        recommendation systems on shopping platforms (such as Amazon).
      </p>
      <p>
        Insights often heavily rely on user similarity, which
        might lead to recommendations which are viewed as invasive.
      </p>
      <p>
        My aim is to explore how a GNN which uses exclusively product similarity
        to make deterministic recommendations, without having to ever store
        information about the users themselves.
      </p>
      
      <h2>Abstract</h2>

      <p>
        Recommendation systems are integral to online shopping, bolstering
        discovery, engagement, and revenue. Purchase data naturally lends itself
        to graph representations that GNNs can exploit to derive valuable
        insights. Building on this, we explore an item-centric recommendation
        approach that avoids user history while still providing relevant, varied
        product suggestions.
      </p>
      <p>
        We build our system on the Stanford Network Analysis Project's Amazon
        co-purchase dataset, which we enlarge during preprocessing with a
        lightweight crawler -- using scapy (Python) -- that periodically scrapes
        publicly available co-purchase data and product metadata. We train a
        Graph Convolutional Network with PyG to embed items in the co-purchase
        graph based on item similarity. Heuristic candidate generation is
        optimised under three ranking objectives -- NDCG, mAP and MSE. Diversity
        is maintained by reranking with MMR or DPP. We aim to find the
        loss-diversity pairing which maximises the Recall@k and Coverage
        metrics. We expose the recommendation system via a custom Go API that
        interacts with the co-purchase graph stored in Neo4j and the product
        metadata in PostgreSQL. The API relays each 'shopping basket' query to
        the trained PyG model, returning a visualised list of the top-k item
        recommendations.
      </p>
    </OverviewTemplate>
  );
};

export default GNNRecommendationsOverview;
