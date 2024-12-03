import React, { useState } from "react";
import ReactFlow, { ReactFlowProvider, Controls } from "react-flow-renderer";

export default function TransformationBuilderWithGraph({ fields, onSave }) {
    const [transformations, setTransformations] = useState([]);
    const [graphNodes, setGraphNodes] = useState([]);
    const [graphEdges, setGraphEdges] = useState([]);

    const addTransformation = () => {
        const newTransformation = {
            id: `transformation-${transformations.length + 1}`,
            operation: null,
            inputs: [],
            output: null,
        };
        setTransformations([...transformations, newTransformation]);
    };

    const handleOperationChange = (id, operation) => {
        setTransformations((prev) =>
            prev.map((t) =>
                t.id === id ? { ...t, operation } : t
            )
        );
    };

    const handleInputChange = (id, index, value) => {
        setTransformations((prev) =>
            prev.map((t) =>
                t.id === id
                    ? {
                        ...t,
                        inputs: t.inputs.map((input, i) =>
                            i === index ? value : input
                        ),
                    }
                    : t
            )
        );
    };

    const handleSave = () => {
        onSave(transformations);
    };

    // Generate graph visualization from transformations
    const generateGraph = () => {
        const nodes = fields.map((field, index) => ({
            id: field.name,
            data: { label: `${field.name} (${field.type})` },
            position: { x: 100, y: index * 80 },
        }));
        const edges = transformations.flatMap((t) =>
            t.inputs.map((input) => ({
                id: `e-${input}-${t.output}`,
                source: input,
                target: t.output,
                type: "smoothstep",
            }))
        );
        setGraphNodes(nodes);
        setGraphEdges(edges);
    };

    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Define Transformations</h3>
            <div className="mb-4">
                {transformations.map((transformation) => (
                    <div key={transformation.id} className="mb-2 border p-2">
                        <select
                            onChange={(e) =>
                                handleOperationChange(transformation.id, e.target.value)
                            }
                            className="border rounded px-2 py-1"
                        >
                            <option value="">Select Operation</option>
                            <option value="add">Add</option>
                            <option value="subtract">Subtract</option>
                            <option value="multiply">Multiply</option>
                            <option value="divide">Divide</option>
                        </select>
                        <div className="flex gap-2 mt-2">
                            <select
                                onChange={(e) =>
                                    handleInputChange(
                                        transformation.id,
                                        0,
                                        e.target.value
                                    )
                                }
                                className="border rounded px-2 py-1"
                            >
                                <option value="">Select Input 1</option>
                                {fields.map((field) => (
                                    <option key={field.name} value={field.name}>
                                        {field.name}
                                    </option>
                                ))}
                            </select>
                            <select
                                onChange={(e) =>
                                    handleInputChange(
                                        transformation.id,
                                        1,
                                        e.target.value
                                    )
                                }
                                className="border rounded px-2 py-1"
                            >
                                <option value="">Select Input 2</option>
                                {fields.map((field) => (
                                    <option key={field.name} value={field.name}>
                                        {field.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                ))}
                <button
                    onClick={addTransformation}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                >
                    + Add Transformation
                </button>
            </div>
            <button
                onClick={generateGraph}
                className="bg-purple-500 text-white px-4 py-2 rounded"
            >
                Generate Graph
            </button>
            <div className="mt-4" style={{ height: 400 }}>
                <ReactFlowProvider>
                    <ReactFlow
                        nodes={graphNodes}
                        edges={graphEdges}
                        style={{ width: "100%", height: "100%" }}
                        fitView
                    >
                        <Controls />
                    </ReactFlow>
                </ReactFlowProvider>
            </div>
            <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded mt-4"
            >
                Save Transformations
            </button>
        </div>
    );
}
