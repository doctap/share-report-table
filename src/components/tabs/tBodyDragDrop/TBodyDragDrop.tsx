import React, { useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  type DropResult,
  Droppable
}
  from 'react-beautiful-dnd';
import type { ConvertedStocks } from '../../../types';
import { getId } from '../../../helpers';

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  ...draggableStyle,
  background: isDragging ? '#68387a' : 'white',
  display: isDragging ? 'table' : undefined,
  textAlign: 'center',
  color: isDragging ? 'white' : 'black',
  borderRadius: '5px'
});

interface ITBodyDragDrop {
  stocks: ConvertedStocks
}

export const TBodyDragDrop = (props: ITBodyDragDrop) => {
  const [items, setItems] = useState(props.stocks);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (destination == null) return;

    const rows = [...items];
    const [newOrder] = rows.splice(source.index, 1);
    rows.splice(destination.index, 0, newOrder);

    setItems(rows);
  };

  useEffect(() => {
    setItems(props.stocks);
  }, [props.stocks]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='stocks'>
        {provided => (
          <tbody
            {...provided.droppableProps} ref={provided.innerRef}
          >
            {items.map((item, index) => {
              return (
                <Draggable key={getId(item)} draggableId={getId(item)} index={index}>
                  {(provided, snapshot) => (
                    <tr
                      key={getId(item)}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                    >
                      {item.map((cell, i) => <td key={i}>{cell}</td>)}
                    </tr>
                  )}
                </Draggable>
              );
            })}
          </tbody>
        )}
      </Droppable>
    </DragDropContext>
  );
};
